import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';
import Submessages from "../../admin/component/Submessages";
import AdminMessages from "../../admin/component/AdminMessages";
import axios from 'axios';
import { format } from 'date-fns';
export default function History(props){

    const [cartAdd, setCartAdd] = useState(0);
    const [arrData, setArrData] = useState([]);
    const [totCart, setTotCart] = useState(0);
    const currentDate = new Date();
    const [formTrans, setFormTrans] = useState({
        nama_pengirim: '',
        created_at: format(currentDate, 'yyyy-MM-dd h:mm:ss'),
    }); 
    // const [formTrans, setFormTrans] = useState({
    //     created_at: "2024-08-24 11:12:21",
    //     id_product: "19,20",
    //     id_trans: "TRX-3992",
    //     id_user: 60,
    //     payment: "",
    //     price: "468000",
    //     status: 3
    // }); 
    

    // Random Id Trans
    let generatedIDs = new Set(); // Set to keep track of generated IDs

    const generateUniqueTransactionID = () => {
    const prefix = 'TRX-';
    let uniqueID;
    do {
        const randomNumber = Math.floor(Math.random() * 10000); // Generate a number between 0 and 9999
        const paddedNumber = String(randomNumber).padStart(4, '0'); // Pad the number with leading zeros
        uniqueID = `${prefix}${paddedNumber}`;
    } while (generatedIDs.has(uniqueID)); // Ensure uniqueness

    generatedIDs.add(uniqueID); // Add the new unique ID to the set
    return uniqueID;
    };

      
    // Random Id Trans

    const getCart = async () => {
        const id_user = localStorage.getItem('id_user');
        try {
            const response = await axios.get(`http://www.tech-in-dynamic.site:3000/api/v1/cart/${id_user}`);
            setArrData(response.data);
            // Membuat objek baru berdasarkan data yang diterima
            let price = 0;
            const newFormTrans = response.data.reduce((acc, item) => {
                price = item.price;
                if (acc.length > 0) {
                
                  acc += ','; 
                }
                acc += item.id_product;

                return acc;
              }, '');

            //   GetUser
            const getUser = localStorage.getItem("id_user");

            //   Price
              const total = response.data.reduce((acc, item) => acc + parseInt(item.price), 0);
            //   console.log(total);
              setFormTrans(prevState => ({
                ...prevState,
                id_trans: generateUniqueTransactionID(),
                price: total.toString(),
                id_user: parseInt(getUser),
                status: 1,
                file: "",
                payment: "",
              }));

              setFormTrans(prevState => ({
                ...prevState,
                id_product: newFormTrans,
              }));
             
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
            const response = await axios.delete(`http://www.tech-in-dynamic.site:3000/api/v1/cart/del/${id}`);
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

    const [idP, setIdP] = useState([]);
 
    // CheckOut
    const handleCheckout = async () => {
        console.log(formTrans);
        const id_local = localStorage.getItem("id_user");
        try {
            const response = await axios.post("http://www.tech-in-dynamic.site:3000/api/v1/transaksi/insert/", formTrans);
            if(response.status == 200){
                const idProductString = formTrans.id_chart;

                const idsArray = (typeof idProductString === 'string' && idProductString.trim() !== '') 
                    ? idProductString.split(',').map(id => id.trim())
                    : []; 
 
                    setIdP(prevState => {
                        const updatedState = {
                            ...prevState,
                            "numbers": idsArray,
                        };
                        return updatedState;
                    });

                    updateW(id_local);

            }
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
    // CheckOut
    const rupiah = (amount) => {
        const rupiah = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });
        return rupiah.format(amount);
    };

    const updateW = async(cartData) => {
         const res = await axios.delete("http://www.tech-in-dynamic.site:3000/api/v1/cart/delCart/", cartData);
        console.log(cartData);            
        if(res.status == 200){
            alert("Berhasil Checkout Cart, segera melunasi di menu Transaction History!");  
            localStorage.setItem("sidebar", "Trans_History");
            window.location.reload();
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
    }, []);
    
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
                                        <span className="font-bold text-2xl pt-1">{rupiah(item.price)}</span>
                                    </div>
                                </div>
                                {/* Price */}
                            </div>
                        </div>
                    ))}
                    
                    <div className="bottom-0 left-0 w-full p-2">
                        <div className="bg-white w-full h-[100px] flex items-center justify-center justify-between px-10">
                            <button className="bg-blue-400 px-5 py-1 text-white rounded-md shadow-md" type="button" onClick={() =>handleCheckout()}>
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