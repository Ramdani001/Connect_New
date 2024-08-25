import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function DetailModal(props){
    const {key, id_product, nama, type, price, ket, url} = props;

    const [modalDetail, setModalDetail] = useState(false);
    const [idUser, setIdUser] = useState();

    const [formUpdate, setFormUpdate] = useState({});

    const [checkChart, setCheckChart] = useState();

    // Handle click event to get product ID
    const handleCart = (e) => {
        const targetElement = e.currentTarget || e.target;
        const id_product = targetElement.getAttribute('data-id');

        const paid = 2;

        updateProd(id_product, idUser, paid);
    };

    const updateProd = async (id_product, id_user, paid) => {

        const send = {id_product, id_user, paid};
        console.log(send)

        try { 

            const response = await axios.post("http://localhost:3000/api/v1/cart/add", send);
            
            if(response.status == 200){
                console.log(response);

                const elements = document.querySelectorAll(`[data-id='${id_product}']`);

                elements.forEach(element => {
                    element.disabled = true;
                });

                alert("Berhasil ditambahkan");

            }
            // console.log(arrProd);
        } catch (error) {
            if(error.response){
                if(error.response.status == 300){
                    setshowAlertWar(true);
                }
            }
            if (error.response) {
                console.error('Response errora:', error.response.status);
                console.error('Response data:', error.response.data);
            
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    const handleFormUpdate = (e) => {
        const { name, value } = e.target;

        setFormUpdate(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        const id_user = localStorage.getItem('id_user');
        if(id_user){
            setIdUser(id_user);
        }else{
            setIdUser(0);
        }
        console.log(idUser);
    }, []);

    useEffect(() => {
        console.log(modalDetail);
    }, [modalDetail]);

    return(
        <section className={modalDetail ? "hidden bg-red-500" : "fixed h-screen w-full bg-gray-500/70 top-0 left-0 right-0 bottom-0 overflow-hidden"} style={{zIndex: 100}}>
            <main className="p-10 grid place-items-center h-full">
                <div className="borde w-2/3 h-full p-5 bg-white rounded-sm shadow">
                    <div className="closeSection text-2xl font-semibold flex justify-end mr-3">
                        <button onClick={() => setModalDetail(!modalDetail)} className="cursor-pointer">X</button>
                    </div>

                    <div className="grid grid-flow-col-dense gap-3 place-items-center h-full w-full">
                        <div className="content w-full h-2/4 rounded-sm">
                            <iframe src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="md:w-96 md:h-full"></iframe>
                        </div>
    
                        <div className="textContent col w-full h-2/3 col-span-1">
                            <div>
                                <label className="text-slate-400">Title</label>
                                <h2 className="font-bold text-xl">{nama}</h2>
                            </div>
                            <div>
                                <label className="text-slate-400">Type</label>
                                <h2 className="text-md">{type}</h2>
                            </div>
                            <div className="">
                                <label className="text-slate-400">Summary</label>
                                <h2 className=""> {ket}</h2>
                            </div>
                            <div className="mt-3 flex gap-3">
                                {idUser != 0 ? (

                                <button onClick={handleCart} data-id={id_product} className="border border-blue-400 rounded shadow-md font-semibold p-1 w-full">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    Add To Cart
                                </button>
                                ) : 
                                    <div className="flex md:justify-center mr-7 w-full border bg-[#df5ac1] border-none rounded-md shadow-md text-center">
                                        <Link to="/login">
                                            <button className="py-1 px-10 text-center">Login</button>
                                        </Link>
                                    </div>
                                }
                            </div>

                            <div className="sosmed flex justify-evenly mt-3">
                                <div>
                                    <i class="fa-brands fa-square-instagram"></i>
                                </div>
                                <div>
                                    <i class="fa-brands fa-square-facebook"></i>
                                </div>
                                <div>
                                    <i class="fa-brands fa-youtube"></i>
                                </div>
                                <div>
                                    <i class="fa-brands fa-whatsapp"></i>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </section>
    )
}