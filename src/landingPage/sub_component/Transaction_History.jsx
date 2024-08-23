import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';
import Submessages from "../../admin/component/Submessages";
import AdminMessages from "../../admin/component/AdminMessages";
import axios from 'axios';
 
export default function Transaction_History(props){

    const [konfirmasi, setKonfirmasi] = useState(false);
    // Countdown
    const [timeLeft, setTimeLeft] = useState(1 * 2);

    useEffect(() => {
        if (timeLeft === 0) return;
        
        const intervalId = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
        }, 1000);

        return () => {
            console.log(timeLeft <= 1 ? "timer ended" : "");
            clearInterval(intervalId);
        };
    }, [timeLeft]);

    // Menghitung menit dan detik
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Countdown

    return (
        <div >
            <div className="w-full h-full bg-white flex gap-3">

                <div className="w-full h-[86vh] bg-gray-400/20 p-3 flex flex-col">
                   <h1 className="font-olive p-2"> <u>Transaction History</u> </h1>

                    <div className="bg-white w-full h-[120px] mt-2 p-2">
                        
                        <div className="flex justify-between">
                            <div>
                                <h6 className="font-popins">  ID Transaction : <b className="font-olive">TRX-0001</b> &nbsp;<span className="font-bold text-yellow-500"> {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span> </h6>
                            </div>
                            <div>
                                <h6 className="font-popins">Transaction Date : <b className="font-olive">23, Agustus 2024</b> </h6>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="grid w-[30%]">
                                <span>
                                    <b>Instagram</b>
                                </span>
                                <span className="font-olive">- Tutorial </span>
                            </div>
                            <div className="grid w-[30%]">
                                <span>
                                    <b>Youtube</b>
                                </span>
                                <span className="font-olive">- Andre </span>
                            </div>
                            <div className="grid w-[30%]">
                                <span>
                                    <b>Facebook</b>
                                </span>
                                <span className="font-olive">- Meyden </span>
                            </div>
                            <div className="grid w-[30%]">
                                <span>
                                    <b>==> Price : </b>
                                </span>
                                <span className="font-olive">==> Rp 468.000,00</span>
                            </div>

                            {/* Paid */}
                            {/* <div className="bg-green-400 w-[100px] absolute h-[100px] -mt-6 ml-[40%] bg-transparent border-2 border-green-300 rounded-full text-green-300 grid place-center text-center items-center font-bold font-olive text-2xl rotate-45" >
                                Paid
                            </div> */}

                            {/* Confirmation */}
                            {/* <div className="w-[100px] absolute h-[100px] -mt-6 ml-[40%] bg-transparent border-2 border-gray-300 rounded-full text-gray-300 grid place-center text-center items-center font-bold font-olive text-xs rotate-45" >
                                Confirmation
                            </div> */}

                            {/* Not Yet Paid */}
                            <div className="w-[100px] absolute h-[100px] -mt-6 ml-[40%] bg-transparent border-2 border-red-300 rounded-full text-red-300 grid place-center text-center items-center font-bold font-olive text-xs rotate-45" >
                                Not Paid
                            </div>
                            {/* Paid */}

                            <div className="grid w-full justify-end">
                                <button></button>
                                <button className="px-10 py-1 bg-blue-200 me-3 rounded-md shadow-mdz font-popins font-bold" data-id="1" onClick={() => setKonfirmasi(!konfirmasi)}>Konfirmasi</button>
                            </div>

                        </div>

                    </div>
                    {/*  */}
                    <div className="bg-white w-full h-[120px] mt-2 p-2">
                        
                        <div className="flex justify-between">
                            <div>
                                <h6 className="font-popins">ID Transaction : <b className="font-olive">TRX-0001</b> </h6>
                            </div>
                            <div>
                                <h6 className="font-popins">Transaction Date : <b className="font-olive">23, Agustus 2024</b> </h6>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="grid w-[30%]">
                                <span>
                                    <b>Instagram</b>
                                </span>
                                <span className="font-olive">- Tutorial </span>
                            </div>
                            <div className="grid w-[30%]">
                                <span>
                                    <b>Youtube</b>
                                </span>
                                <span className="font-olive">- Andre </span>
                            </div>
                            <div className="grid w-[30%]">
                                <span>
                                    <b>Facebook</b>
                                </span>
                                <span className="font-olive">- Meyden </span>
                            </div>
                            <div className="grid w-[30%]">
                                <span>
                                    <b>==> Price : </b>
                                </span>
                                <span className="font-olive">==> Rp 468.000,00</span>
                            </div>

                            {/* Paid */}
                            <div className="bg-green-400 w-[100px] absolute h-[100px] -mt-6 ml-[40%] bg-transparent border-2 border-green-300 rounded-full text-green-300 grid place-center text-center items-center font-bold font-olive text-2xl rotate-45" >
                                Paid
                            </div>

                            {/* Confirmation */}
                            {/* <div className="w-[100px] absolute h-[100px] -mt-6 ml-[40%] bg-transparent border-2 border-gray-300 rounded-full text-gray-300 grid place-center text-center items-center font-bold font-olive text-xs rotate-45" >
                                Confirmation
                            </div> */}

                            {/* Not Yet Paid */}
                            {/* <div className="w-[100px] absolute h-[100px] -mt-6 ml-[40%] bg-transparent border-2 border-red-300 rounded-full text-red-300 grid place-center text-center items-center font-bold font-olive text-xs rotate-45" >
                                Not Paid
                            </div> */}
                            {/* Paid */}

                            {/* <div className="grid w-full justify-end">
                                <button></button>
                                <button className="px-10 py-1 bg-blue-200 me-3 rounded-md shadow-mdz font-popins font-bold">Konfirmasi</button>
                            </div> */}

                        </div>

                    </div>
                    {/*  */}
                    <div className="bg-white w-full h-[120px] mt-2 p-2">
                        
                        <div className="flex justify-between">
                            <div>
                                <h6 className="font-popins">ID Transaction : <b className="font-olive">TRX-0001</b> </h6>
                            </div>
                            <div>
                                <h6 className="font-popins">Transaction Date : <b className="font-olive">23, Agustus 2024</b> </h6>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="grid w-[30%]">
                                <span>
                                    <b>Instagram</b>
                                </span>
                                <span className="font-olive">- Tutorial </span>
                            </div>
                            <div className="grid w-[30%]">
                                <span>
                                    <b>Youtube</b>
                                </span>
                                <span className="font-olive">- Andre </span>
                            </div>
                            <div className="grid w-[30%]">
                                <span>
                                    <b>Facebook</b>
                                </span>
                                <span className="font-olive">- Meyden </span>
                            </div>
                            <div className="grid w-[30%]">
                                <span>
                                    <b>==> Price : </b>
                                </span>
                                <span className="font-olive">==> Rp 468.000,00</span>
                            </div>

                            {/* Paid */}
                            {/* <div className="bg-green-400 w-[100px] absolute h-[100px] -mt-6 ml-[40%] bg-transparent border-2 border-green-300 rounded-full text-green-300 grid place-center text-center items-center font-bold font-olive text-2xl rotate-45" >
                                Paid
                            </div> */}

                            {/* Confirmation */}
                            <div className="w-[100px] absolute h-[100px] -mt-6 ml-[40%] bg-transparent border-2 border-gray-300 rounded-full text-gray-300 grid place-center text-center items-center font-bold font-olive text-xs rotate-45" >
                                Confirmation
                            </div>

                            {/* Not Yet Paid */}
                            {/* <div className="w-[100px] absolute h-[100px] -mt-6 ml-[40%] bg-transparent border-2 border-red-300 rounded-full text-red-300 grid place-center text-center items-center font-bold font-olive text-xs rotate-45" >
                                Not Paid
                            </div> */}
                            {/* Paid */}

                            {/* <div className="grid w-full justify-end">
                                <button></button>
                                <button className="px-10 py-1 bg-blue-200 me-3 rounded-md shadow-mdz font-popins font-bold">Konfirmasi</button>
                            </div> */}

                        </div>

                    </div>

                </div>
            </div>

            {/* Modal Konfirmasi */}
            <div className={konfirmasi == true ? "bg-gray-400/50 h-screen z-[100] w-full top-0 fixed left-0" : "hidden"}>
                <div className="w-full h-full flex justify-center items-center">
                    <form method="POST" className="bg-white relative w-[30%] h-[80%] shadow-md rounded">
                        
                        <div className="flex pl-12 text-xl pt-1 font-olive text-white items-center bg-pink-400 w-full h-[100px] rounded-br-full rounded-bl-full gap-12">
                                <button type="button" onClick={() => setKonfirmasi(!konfirmasi)}>
                                    <img src="images/back.png" width={50} alt="" />
                                </button>
                                <h2 className="text-3xl">ConnectPay</h2>
                        </div>

                        <div className="p-10">
                            <select name="payment" id="payment" className="w-full border p-2">
                                <option selected className="rounded-none p-2">Payment</option>
                                <option value="DaNa" className="rounded-none p-2">Dana</option>
                                <option value="BRI" className="rounded-none p-2">BRI</option>
                                <option value="Mandiri" className="rounded-none p-2">Mandiri</option>
                                <option value="BCA" className="rounded-none p-2">BCA</option>
                            </select>
                        </div>

                        <div className="bottom-0 absolute flex text-3xl font-olive text-white items-center bg-pink-400 w-full h-[60px]">
                            <h2>ConnectPay</h2>
                        </div>

                    </form>
                </div>
            </div>
            {/* Modal Konfirmasi */}

        </div>
    )
};