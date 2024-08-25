import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import DataTable, { createTheme } from 'react-data-table-component';
import axios from 'axios';
import Messages from "./component/Messages";

export default function Dashboard(props){

    const [url, setUrl] = useState('http://localhost:3000/api/v1/transaksi');
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
            selector: row => row.nama,
            sortable: true
        },
        {
            name: 'Id Product',
            selector: row => row.id_product,
            sortable: true
        }
    ]

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
                        className="h-[40%] w-full border rounded-md shadow-md"
                        columns={columns}
                        data={transData}
                        fixedHeader
                        pagination
                        theme="solarized"
                    ></DataTable>

                    <div className="pt-3">
                        <Messages />
                    </div>

                </div>

            </div>
        </>
    )
}