import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import DataTable, { createTheme } from 'react-data-table-component';
import axios from 'axios';
import Messages from "./component/Messages";

export default function Dashboard(props){

    const [url, setUrl] = useState('http://www.tempat-transit.cloud:3000/api/v1/transaksi/trans');
    const [transData, setTransData] = useState([]);
 
    const getTrans = async () => {
        try {
            const response = await axios.get(url);
            
            setTransData(response.data);

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

    const columns = [
        {
            name: 'No',
            selector: (row, index) => index + 1,
            sortable: true
        },
        {
            name: 'Id Transaksi',
            selector: row => row.id_trans,
            sortable: true
        },
        {
            name: 'Customer',
            selector: row => row.nama_pengirim,
            sortable: true
        },
        {
            name: 'Name Product',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Type Product',
            selector: row => row.type,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Status',
            cell: row => {
                // Use a single conditional check to render the status
                switch (row.status) {
                    case 1:
                        return <span>Unpaid</span>;
                    case 2:
                        return <span>Confirmation</span>;
                    case 3:
                        return <span>Paid</span>;
                    default:
                        return <span>Unknown</span>; // Handle unknown statuses
                }
            },
            sortable: false
        },
        {
            name: 'Action',
            cell: row => (
                <button className="bg-green-600 py-1 px-4 rounded-md text-white shadow-md" onClick={() => handleAction(row.id)}>Detail</button>
            ),
            sortable: false
        },
    ]

    const [showDet, setShowDet] = useState(false);
    const [idT, setIdT] = useState(0);

    const [arr ,setArr] = useState({});

    const statChange = async() => {
        console.log(idT);

        const response = await axios.get(`http://www.tempat-transit.cloud:3000/api/v1/transaksi/two/${idT}`);

        if(response.status == 200){
            window.location.reload();
        }

    }

    const handleAction = async(data) => {
        setIdT(data);
        const id = parseInt(data);
        
        const response = await axios.get(`http://www.tempat-transit.cloud:3000/api/v1/transaksi/one/${id}`);

        if(response.status == 200){

            const fileName = response.data[0].file;
            const imgElement = document.getElementById("img_bukti");

            const id_t = response.data[0].id_trans;

            document.getElementById("id_tr").value = id_t;
            document.getElementById("title").value =  response.data[0].title;
            document.getElementById("type").value =  response.data[0].type;
            document.getElementById("nama_pengirim").value =  response.data[0].nama_pengirim;
            document.getElementById("price").value =  response.data[0].price;
            document.getElementById("created_at").value =  response.data[0].created_at;
            
            const st = response.data[0].status;
            
            if(st == 1){
                document.getElementById("status").value =  "Unpaid";
                document.getElementById("btn_confirm").classList.add("hidden");

            }else if(st == 2){
                document.getElementById("status").value =  "Confirmation";
                document.getElementById("btn_confirm").classList.remove("hidden");
            }else{
                document.getElementById("status").value =  "Paid";
                document.getElementById("btn_confirm").classList.add("hidden");
            }

            if (imgElement && fileName) {
                imgElement.src = `images/products/${fileName}`;
            }

            setArr(response.data);
            setShowDet(!showDet);
            console.log(response.data);
        }

    }

    createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#fff',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      });

    useEffect(() => {
        getTrans();
    }, []);

    return(
        <>
            <div className="p-5 bg-white m-2 w-full shdaow-md rounded-md flex gap-4 items-top">
                
                <div className="w-[20%]">
                    
                    <div className=" bg-[url('images/bg5.png')] w-full bg-cover border h-[93vh]">
                        <div className="grid gap-12 items-center bg-gray-400/50 h-full justify-center">
                            <div className="w-[180px] text-center p-4 h-[180px] bg-white rounded-md shadow-md bg-cover">
                                <div className="flex gap-1">
                                    <img src="images/confirmation.png" className="relative" width={40} alt="" />
                                    <h6 className="font-popins text-md font-bold pt-3">Confirmation</h6>
                                </div>
                                <h5 className="font-olive text-5xl pt-5">
                                    23
                                </h5>
                            </div>
                            {/*  */}
                            <div className="w-[180px] text-center p-4 h-[180px] bg-white rounded-md shadow-md bg-white bg-cover">
                                <div className="flex gap-1">
                                    <img src="images/user_icon.png" className="relative" width={40} alt="" />
                                    <h6 className="font-popins font-bold pt-3">User's</h6>
                                </div>
                                <h5 className="font-olive text-5xl pt-5">
                                    23
                                </h5>
                            </div>
                            {/*  */}
                            <div className="w-[180px] text-center p-4 h-[180px] bg-white rounded-md shadow-md bg-white bg-cover">
                                <div className="flex gap-1">
                                    <img src="images/video.png" className="relative" width={40} alt="" />
                                    <h6 className="font-popins font-bold pt-3">Product's</h6>
                                </div>
                                <h5 className="font-olive text-5xl pt-5">
                                    23
                                </h5>
                            </div>
                            {/*  */}
                        </div>
                    </div>

                </div>

                <div className="w-full pt-4 border p-4">
                    <DataTable
                        className="h-[60%] w-full border rounded-md shadow-md overflow-auto"
                        columns={columns}
                        data={transData}
                        pagination
                        theme="solarized"
                        responsive
                    ></DataTable>

                    <div className="pt-3">
                        <Messages />
                    </div>
 
                </div>


                {/* Detail Transaksi */}
                <div className={showDet ? "w-full h-full bg-black/30 absolute top-0 left-0 flex justify-center" : "hidden"}>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="bg-white p-4 w-[50%] h-[70%]">
                            <div className="flex justify-between">
                                <h2 className="font-olive pb-1">Transactin Detail </h2>
                                <span className="font-olive cursor-pointer" onClick={() => setShowDet(!showDet)}>X</span>
                            </div>
                            <hr />

                            {/* Content */}
                            <div className="flex gap-10">
                                <div className="w-full h-full relative">
                                    <img src="" id="img_bukti" alt="" className="w-full h-[460px] object-fill" />
                                </div>
                                <div className="w-full py-5">
                                    <span className="flex items-center">
                                        <span className="w-[120px]">Id Transaksi</span>
                                        <span className="w-[10px]">:</span>
                                        <input type="text" id="id_tr" className="border-0 font-olive py-2" disabled /> 
                                    </span>
                                    <span className="flex items-center">
                                        <span className="w-[120px]">Product Name</span>
                                        <span className="w-[10px]">:</span>
                                        <input type="text" id="title" className="border-0 font-olive py-2" disabled />
                                    </span>
                                    <span className="flex items-center">
                                        <span className="w-[120px]">Product type</span>
                                        <span className="w-[10px]">:</span>
                                        <input type="text" id="type" className="border-0 font-olive py-2" disabled />
                                    </span>
                                    <span className="flex items-center">
                                        <span className="w-[120px]">Name</span>
                                        <span className="w-[10px]">:</span>
                                        <input type="text" id="nama_pengirim" className="border-0 font-olive py-2" disabled />
                                    </span>
                                    <span className="flex items-center">
                                        <span className="w-[120px]">Price</span>
                                        <span className="w-[10px]">:</span>
                                        <input type="text" id="price" className="border-0 font-olive py-2" disabled />
                                    </span>
                                    <span className="flex items-center">
                                        <span className="w-[120px]">Status</span>
                                        <span className="w-[10px]">:</span>
                                        <input type="text" id="status" className="border-0 font-olive py-2" disabled />
                                    </span>
                                    <span className="flex items-center">
                                        <span className="w-[120px]">Order Date</span>
                                        <span className="w-[10px]">:</span>
                                        <input type="text" id="created_at" className="border-0 font-olive py-2" disabled />
                                    </span>
                                    <div id="btn_confirm" className="py-2 px-auto bg-blue-500 text-center text-white rounded-md shadow-md mt-20">
                                        <button onClick={statChange}>Confirmation</button>
                                    </div>
                                </div>


                            </div>
                            {/* Content */}

                        </div>
                    </div>
                </div>
                {/* Detail Transaksi */}


            </div>
        </>
    )
}