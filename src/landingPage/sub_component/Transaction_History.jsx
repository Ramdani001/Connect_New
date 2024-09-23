import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';
import Submessages from "../../admin/component/Submessages";
import AdminMessages from "../../admin/component/AdminMessages";
import axios from 'axios';
import { split } from "postcss/lib/list";
 
export default function Transaction_History(props){
 
    const [konfirmasi, setKonfirmasi] = useState(false);
    // Countdown
    const [timeLeft, setTimeLeft] = useState(1 * 1800);

    const [arrData, setArrData] = useState([]);

    const [idP, setIdP] = useState([]);

    const [detParams, setDetParams] = useState([]);
    const [id, setId] = useState(0);
    const [changeload, setChangeLoad] = useState(false);

    const getCart = async () => {
        try { 
            const id_user = localStorage.getItem("id_user");
            const response = await axios.get(`http://www.tech-in-dynamic.site:3000/api/v1/transaksi/${id_user}`);
  
            if(response.status == 200){
                setArrData(response.data);
                const idProductString = response.data[2].id_product;
                const get_trans = response.data;

                setDetParams(res.data);
                const ray = {};
                get_trans.map((element) => {
                    ray[element.id_trans] = element.id_product;
                });
                
                const combinedIds = Object.values(ray)
                .flatMap(ids => ids.split(','));
                
                const uniqueIds = [...new Set(combinedIds)];
                
                // const idsArray = (typeof idProductString === 'string' && idProductString.trim() !== '') 
                //     ? idProductString.split(',').map(id => id.trim())
                //     : []; 
                    // setId(response)
                 
                setIdP(prevState => {
                    const updatedState = {
                        ...prevState,
                        "id_trans": ray,
                        "numbers": uniqueIds,
                    };
                    return updatedState;
                });
                
            }

        } catch (error) {
            
            if (error.response) {
                
                console.error('Response error:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                
                console.error('Request error:', error.request);
            } else {
                
                console.error('Error:', error.message);
            }
        }
    }; 
    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Bulan dimulai dari 0
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
      
        return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year} ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      };

    useEffect(() => {
        if (timeLeft === 0) return;
        
        const intervalId = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [timeLeft]);

    const [listProd, setListProd] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (idP) {
                    const res = await axios.post("http://www.tech-in-dynamic.site:3000/api/v1/transaksi/det/", idP);
                    setDetParams(res.data);
                    console.log("Res "+res);
                    const transactions = idP.id_trans;
                    
                    const datu = res.data;
                    const ray = {};
                    
                    for (const [trxId, ids] of Object.entries(transactions)) {
                        ray[trxId] = datu.filter(product => ids.includes(product.id_product));
                    }

                    setDetParams(ray);
                    console.log(ray);
                    
                    

                } else {
                    console.log("Data Kosong");
                }
            } catch (error) {
                console.error("Error posting data:", error);
            }
        };

        fetchData();
    }, [idP]);

    useEffect(() => {
        setListProd(detParams);
        console.log("Det Param"+ detParams);
    }, [detParams])

    useEffect(() => {
        getCart();

    }, []);
    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
        const total = arrData.reduce((acc, item) => acc + parseInt(item.price), 0);
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        setTotalCart(formatter.format(total));
    }, [arrData]);

    const [formKonf, setFormKonf] = useState({});
    const [typePayment, setTypePayment] = useState("");

    // Konfirmasi Pembayaran
    const payChange = (e) => {

        setFormKonf(prevState => ({
            ...prevState,
            payment: e.target.value,
        }));

        let io = document.getElementById('id_o').value;

        setId(io);

          setTypePayment(e.target.value);

    }


    const [images, setImages] = useState([]);

    const filePay = (event) => {
        const file = event.target.files[0]; // Get the first file selected
        if (file) {

        setFormKonf(prevState => ({
            ...prevState,
            id: id,
        }))
          setImages(file);
        }
      };

    const name = (e) => {
        const { name, value } = e.target;

        setFormKonf(prevState => ({
          ...prevState,
          [name]: value,
        }));

    }
    const [file, setFile] = useState(null);
    const submitTrans = async() => {
        const formFile = new FormData();
        formFile.append('file', images);
        
        axios.post('http://www.tech-in-dynamic.site:3000/upload', formFile)
        .then(res => {
            
            let data = JSON.stringify(res.data, null, 2);
            
            let file = res.data.filename;
            
            if(file){
                document.getElementById('file_input').value = file;
                const f = document.getElementById('file_input').value;
                if (file) {
                    setChangeLoad(!changeload);
                    setFile(file);
                }

            }else{
                console.log("Tidak Berhasil Upload");
            }
        }).catch(er => console.log(er));

    }

    const [stat, setStat] = useState("");

    useEffect(() => {
        if (file) {
          // Prepare formKonf with file data
          setFormKonf(prevState => ({
            ...prevState,
            file: file, 
          }));
          setStat("Berhasil");
        }
      }, [file]);
    
      useEffect(() => {
        
        if (Object.keys(formKonf).length > 0) {
          addTrans(formKonf);
        }
      }, [stat]);

    const addTrans = async(transData) => {

        axios.post('http://www.tech-in-dynamic.site:3000/api/v1/transaksi/updateInsert', transData)
        .then(res => {

            if(res.status == 200){
                setTimeout(() => {
                    setChangeLoad(false);
                    alert("Mohon untuk tunggu konfirmasi dari Admin, Terima Kasih :)");
                    window.location.reload();
                  }, 2000);
            }

        }).catch(er => console.log(er));

    }

    // Konfirmasi Pembayaran

    // Menghitung menit dan detik
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    // Countdown
 
    return (
        <div >
            <div className="w-full h-full bg-white flex gap-3">

                <div className="w-full h-[89vh] bg-gray-400/20 p-3 flex flex-col relative">
                   <h1 className="font-olive p-2"> <u>Transaction History</u> </h1>
                <div className="overflow-auto">
                   {arrData.slice().reverse().map((item, index) => (
                    <div key={item.id_trans} className="bg-white w-full mt-2 p-2 pb-10">
                        <div className="flex justify-between">
                            <div>
                                <h6 className="font-popins">
                                    ID Transaction : <b className="font-olive">{item.id_trans}</b> &nbsp;
                                    {/* <span className="font-bold text-yellow-500">
                                        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                                    </span> */}
                                </h6>
                                <input type="hidden" name="id" id="id_o" value={item.id} />
                            </div>
                            <div>
                                <h6 className="font-popins">
                                    Transaction Date : <b className="font-olive">{formatDateTime(item.created_at)}</b>
                                </h6>
                            </div>
                        </div>

                        {/* Jika detParams adalah data yang terkait dengan item tertentu, gunakan di sini */}
                        <b><u>List Product</u></b>
                        <div className="flex justify-between">
                            {detParams.map((param, paramIndex) => (
                                <div key={paramIndex} className="flex gap-10">
                                    <div className="grid w-[30%] w-full">
                                        <span><b>{param.type}</b></span>
                                        kk
                                        <span className="font-olive">- {param.title}</span>
                                    </div>
                                </div>
                            ))}
                            <div className="grid w-[30%]">
                                <span><b>== Price : </b></span>
                                <span className="font-olive">== {item.price}</span>
                            </div>

                        </div>
 
                        {/* Status Tag */}
                        <div className="relative">

                            {item.status === 3 &&  (<div className="bg-green-400 w-[100px] absolute h-[100px] -mt-20 ml-[40%] bg-transparent border-2 border-green-300 rounded-full text-green-300 grid place-center text-center items-center font-bold font-olive text-2xl rotate-45">
                                    Paid
                                </div>
                            )}

                            {item.status === 2 && (
                                <div className="w-[100px] absolute h-[100px] -mt-20 ml-[40%] bg-transparent border-2 border-gray-300 rounded-full text-gray-300 grid place-center text-center items-center font-bold font-olive text-xs rotate-45">
                                    Confirmation
                                </div>
                            )}

                            {item.status === 1 && (
                                <div className="absolute top-0 left-1/2 transform -mt-10 -translate-x-1/2 -translate-y-1/2 bg-transparent w-[100px] h-[100px] border-2 border-red-300 rounded-full text-red-300 grid place-items-center font-bold font-olive text-xs rotate-45">
                                    Unpaid
                                </div>
                            )}
                            
                            
                        </div>

                        {/* Button Section */}
                        {item.status == 3 || item.status == 2 ? 
                            ""
                        :
                        <div className="grid w-full justify-end ">
                            <button className="px-10 py-1 bg-blue-200 me-3 rounded-md shadow-md font-popins font-bold" data-id={item.id_trans} onClick={() => setKonfirmasi(!konfirmasi)}>
                                Konfirmasi
                            </button>
                        </div>
                        }
                    </div>
                   ))}
                </div>

                    {/*  */}

                </div>
            </div>

            {/* Modal Konfirmasi */}
            <div className={konfirmasi == true ? "bg-gray-400/50 h-screen z-[100] w-full top-0 fixed left-0" : "hidden"}>
                <div className="w-full h-full flex justify-center items-center">
                    <form method="POST" className="bg-white relative w-[30%] h-[99%] shadow-md rounded">
                        
                        <div className="flex pl-12 text-xl pt-1 font-olive text-white items-center bg-pink-400 w-full h-[100px] rounded-br-full rounded-bl-full gap-12">
                                <button type="button" onClick={() => setKonfirmasi(!konfirmasi)}>
                                    <img src="images/back.png" width={50} alt="" />
                                </button>
                                <h2 className="text-3xl">ConnectPay</h2>
                        </div>

                        <div className="p-10">
                            <select name="payment" id="payment" className="w-full border p-2" onChange={payChange}>
                                <option selected className="rounded-none p-2">Payment</option>
                                {/* <option value="QRIS" className="rounded-none p-2">QRIS</option> */}
                                <option value="BRI" className="rounded-none p-2">BRI</option>
                                <option value="MANDIRI" className="rounded-none p-2">Mandiri</option>
                                <option value="BCA" className="rounded-none p-2">BCA</option>
                            </select>

                            {typePayment == "QRIS" && (
                                <div className="text-center">
                                    <div className="flex justify-center pt-6">
                                        <img src="images/qris.jpg" width={200} alt="" />
                                    </div>
                                    <input type="text" name="nama_pengirim" id="nama_pengirim" onChange={name} className="my-5 w-full border p-2" placeholder="Nama Pengirim" />
                                    <label htmlFor="file" className="w-full pt-5 cursor-pointer" >
                                        Click me to Upload Proof of Payment
                                    </label>
                                    <input type="file"
                                        name="file"
                                        id="file"
                                        onChange={filePay}
                                        className="hidden"
                                    />
                                    <input type="hidden" name="file_pay" id="file_input" className="text"/>
                                </div>  
                            )}

                            {/* BRI */}
                            {typePayment == "BRI" && (
                                <div className="text-center">
                                    <div className="flex justify-center pt-6">
                                        <img src="images/bri.png" width={200} alt="" className="absolute opacity-20 mt-5" />
                                        <div className="text-center py-10 grid gap-10">
                                            <span className="font-popins">Virutal Account</span>
                                            <span className="font-olive text-2xl">0898765766778888</span>
                                            <span className="font-popins">A/N Connect-Inc</span>
                                        </div>
                                    </div>
                                    <input type="text" name="nama_pengirim" id="nama_pengirim" onChange={name} className="my-5 w-full border p-2" placeholder="Nama Pengirim" />
                                    <label htmlFor="file" className="w-full pt-5 cursor-pointer" >
                                        Click me to Upload Proof of Payment
                                    </label>
                                    <input type="file"
                                        name="file"
                                        id="file"
                                        onChange={filePay}
                                        className="hidden"
                                    />
                                    <input type="hidden" name="file_pay" id="file_input" className="text"/>
                                </div>  
                            )}

                            {/* Mandiri */}
                            {typePayment == "MANDIRI" && (
                                <div className="text-center">
                                    <div className="flex justify-center pt-6">
                                        <img src="images/mandiri.png" width={300} alt="" className="absolute opacity-20 -mt-3 ml-4" />
                                        <div className="text-center py-10 grid gap-10">
                                            <span className="font-popins">Virutal Account</span>
                                            <span className="font-olive text-2xl">77336644888822</span>
                                            <span className="font-popins">A/N Connect-Inc</span>
                                        </div>
                                    </div>
                                    <input type="text" name="nama_pengirim" id="nama_pengirim" onChange={name} className="my-5 w-full border p-2" placeholder="Nama Pengirim" />
                                    <label htmlFor="file" className="w-full pt-5 cursor-pointer" >
                                        Click me to Upload Proof of Payment
                                    </label>
                                    <input type="file"
                                        name="file"
                                        id="file"
                                        onChange={filePay}
                                        className="hidden"
                                    />
                                    <input type="hidden" name="file_pay" id="file_input" className="text"/>
                                </div>  
                            )}

                            {/* BCA */}
                            {typePayment == "BCA" && (
                                <div className="text-center">
                                    <div className="flex justify-center pt-6">
                                        <img src="images/bca.png" width={200} alt="" className="absolute opacity-20 mt-5" />
                                        <div className="text-center py-10 grid gap-10">
                                            <span className="font-popins">Virutal Account</span>
                                            <span className="font-olive text-2xl">999999998887766</span>
                                            <span className="font-popins">A/N Connect-Inc</span>
                                        </div>
                                    </div>
                                    <input type="text" name="nama_pengirim" id="nama_pengirim" onChange={name} className="my-5 w-full border p-2" placeholder="Nama Pengirim" />
                                    <label htmlFor="file" className="w-full pt-5 cursor-pointer" >
                                        Click me to Upload Proof of Payment
                                    </label>
                                    <input type="file"
                                        name="file"
                                        id="file"
                                        onChange={filePay}
                                        className="hidden"
                                    />
                                    <input type="hidden" name="file_pay" id="file_input" className="text"/>
                                </div>  
                            )}

                        </div>

                        <div className="bottom-0 absolute flex justify-center text-xl font-olive text-white items-center bg-pink-400 w-full h-[60px]">
                        <button type="button" onClick={submitTrans} className="py-1 px-40 shadow-md bg-white text-black rounded border">
                            {changeload == false ? "Pay" : "Loading"}
                        </button>
                        </div>

                    </form>
                </div>
            </div>
            {/* Modal Konfirmasi */}

        </div>
    )
};