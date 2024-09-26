import React, { useEffect, useState } from "react";
import axios from 'axios';
export default function Users(props){

    const [arrData, setArrData] = useState([]);
    const [url, setUrl] = useState('http://www.tech-in-dynamic.site:3000/api/v1/users/');
    const [loadingShow, setLoadingShow] = useState(false);
    const getUsers = async () => {
        try {
            const response = await axios.get(url);
     
            setArrData(response.data);
            console.log('Data:', typeof(response.data));
            setArrData(response.data);
            setTimeout(() => {
                setLoadingShow(!loadingShow);
              }, 2000);
            

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

    useEffect(() => {
        getUsers();
    }, []);
    const [transHis, setTransHis] = useState([]);
    const [showTrans, setShowTrans] = useState(false);
    const [sendIdP, setSendIdP] = useState([]);
    
    const [detParams, setDetParams] = useState([]);
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
    const transHist = async (e) => {
        console.log(transHis.length);
        try {

            const response = await axios.get(`http://www.tech-in-dynamic.site:3000/api/v1/transaksi/${e}`);
  
            if(response.status == 200){
                setTransHis(response.data);

                setDetParams(response.data);
                const ray = [];

                response.data.forEach(element => {
                    ray.push(element.id_product);
                });

                const mergedData = response.data.map(item => {
                    return {
                        id_trans: item.id_trans,
                        id_product: item.id_product
                    };
                });

                const combinedArray = ray.flatMap(product => product.split(','));
                
                const combinedString = combinedArray.join(',');
                setSendIdP(prevState => {
                    const updatedState = {
                        ...prevState,
                        "id_trans": mergedData,
                        "numbers": combinedString,
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
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        if(allData.length > 0){
            setShowTrans(!showTrans);
        }
    }, [allData]);



    useEffect(() => {
        console.log(sendIdP);
        const fetchData = async () => {
            try {
                if (sendIdP) {
                    const res = await axios.post("http://www.tech-in-dynamic.site:3000/api/v1/transaksi/det/", sendIdP);
                    const sl = sendIdP['id_trans'];

                    const products = res.data;

                    const enrichedTransactions = transHis.map(transaction => {
                        const productIds = transaction.id_product.split(',').map(Number);
                        
                        const productsDetails = products.filter(product => productIds.includes(product.id_product));
                        
                        return {
                            ...transaction,
                            products: productsDetails // Menambahkan detail produk
                        };
                    });
                    setAllData(enrichedTransactions);
                    console.log(enrichedTransactions);
                    

                } else {
                    console.log("Data Kosong");
                }
            } catch (error) {
                console.error("Error posting data:", error);
            }
        };

        fetchData();
    }, [sendIdP]);

    const delFunct = async (e) =>{
        const ok = window.confirm("Apakah yakin ingin menghapusnya?");
        if(ok){
            try {
                const response = await axios.delete(`http://www.tech-in-dynamic.site:3000/api/v1/users/${e}`);
                setUrl("http://www.tech-in-dynamic.site:3000/api/v1/users/");
                console.log('Data:', response);
                window.location.reload();
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
        }
          
        console.log(e);
    }



    return(
        <>
            <div className="p-5 bg-white m-2 w-full shdaow-md rounded-md">

                <div className={loadingShow ? "hidden" : "absolute top-0 border flex items-center justify-center left-0 w-screen bg-black/30 h-full"}>
                    <img src="images/lo-unscreen.gif"  alt="" />
                </div>

                <h1>Halaman Users</h1>

                {/* Table */}
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="border-2">No</th>
                            <th className="border-2">Name</th>
                            <th className="border-2">No Telp</th>
                            <th className="border-2">Email</th>
                            <th className="border-2">username</th>
                            <th className="border-2">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {arrData.forEach(element = > { */}
                        {arrData.map((item, index) => (
                        <tr key={index}>
                            <td className="border-2 p-3 text-center">
                            {index}
                            </td>
                            <td className="border-2 p-3">
                            {item.nama}
                            </td>
                            <td className="border-2 p-3">
                                {item.no_telp}
                            </td>
                            <td className="border-2 p-3">
                            {item.email}
                            </td>
                            <td className="border-2 p-3">
                            {item.username}
                            </td>
                            <td className="border-2">
                            <div className="p-3 flex justify-center">
                                {/* <button className="p-2" title="Edit" value={item.id_user}>
                                <img src="images/edit.png" alt="Edit" width={20} />
                                </button> */}
                                <button className="p-2" title="Delete" onClick={() => delFunct(item.id_user)}>
                                <img src="images/trash.png" alt="Delete" width={20} />
                                </button>
                                <button className="p-2" title="Transaction History" onClick={() => transHist(item.id_user)}>
                                <img src="images/trans.png" alt="Delete" width={20} />
                                </button>
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table> 
                        {/* Modal Transaction history */}
                        

                        <div className={showTrans === false ? "hidden" : "absolute top-0 left-0 w-screen h-screen bg-gray-400/50 flex justify-center items-center"}>
                            <div className="w-[50%] h-[70%] p-4 bg-white shadow-md rounded-md overflow-auto">
                                <div className="flex justify-between pb-2">
                                    <h2>
                                        <b>Transaction History</b>
                                    </h2>
                                    <button onClick={e => setShowTrans(!showTrans)}>
                                        <b>
                                        X
                                        </b>
                                    </button>
                                </div>
                                <hr className="pb-5"/>

                                <div className="overflow-auto">
                                    {allData.slice().reverse().map((item, index) => (
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
                                                {item.products.map((param, paramIndex) => (
                                                    <div key={paramIndex} className="flex gap-10">
                                                        <div className="grid w-[30%] w-full">
                                                            <span><b>{param.type}</b></span>
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
                                        </div>
                                    ))}
                                    </div>

                                {/* 09 */}
                            </div>
                        </div>

                        {/* Modal Transaction history */}
            </div>
        </>
    )
}