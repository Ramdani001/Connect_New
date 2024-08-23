import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';
import Submessages from "../../admin/component/Submessages";
import AdminMessages from "../../admin/component/AdminMessages";
import axios from 'axios';
 
export default function History(props){

    const [cartAdd, setCartAdd] = useState(0);
    const [arrData, setArrData] = useState([]);
    const [totCart, setTotCart] = useState(0);

    const getCart = async () => {
        const id_user = localStorage.getItem('id_user');
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/cart/${id_user}`);
            setArrData(response.data);
            
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
        console.log(arrData);
    }; 

    const delCart = async (e) => {
        
        const id = e;
        console.log('Item ID to delete:', id);
        try {
            const response = await axios.delete(`http://localhost:3000/api/v1/cart/del/${id}`);
            getCart()
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

    useEffect(() => {
        const total = arrData.reduce((acc, item) => acc + parseInt(item.price), 0);
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        setTotCart(formatter.format(total));
    }, [arrData]);


    useEffect(() => {
        getCart();
    }, [arrData]);
    
    return (
        <div >
            <div className="w-full h-full bg-white flex gap-3">

                <div className="w-full h-[86vh] bg-gray-400/20 p-3 flex flex-col">
                   <h1 className="font-olive p-2"> <u>Personal Cart</u> </h1>

                   {arrData.map((item, index) => (
                        <div className="p-2">
                            <div className="flex justify-between bg-white p-2 w-full h-[100px]">
                                <div>
                                    <h5 className="font-bold">
                                        {item.title}
                                    </h5>
                                    <div class="w-[80] line-clamp-2 p-2">
                                        {item.description}
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="text-end text-end flex justify-end w-full px-5">
                                    <div className="grid">
                                        <div className="flex justify-end">
                                            <button className="border bg-red-500 rounded-md px-2 py-0 text-end" data-id={item.id_cart} onClick={() => delCart(item.id_cart)}>X</button>
                                        </div>
                                        <span className="font-bold text-2xl pt-1">Rp. {item.price}</span>
                                    </div>
                                </div>
                                {/* Price */}
                            </div>
                        </div>
                    ))}
                    
                    <div className="bottom-0 left-0 w-full p-2">
                        <div className="bg-white w-full h-[100px] flex items-center justify-center justify-between px-10">
                            <button className="bg-blue-400 px-5 py-1 text-white rounded-md shadow-md">
                                Checkout
                            </button>
                            <span className="text-xl font-semibold text-2xl font-bold font-popins">Total : {totCart}</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
};