import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';

import Video from './component/Video';
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import axios from 'axios';

export default function Gallery(props){

    const [arrData, setArrData] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/api/v1/products');

    const getProduct = async () => {
        try {
            const response = await axios.get(url);
    
            setArrData(response.data);
            console.log('Data:', typeof(response.data));

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
    
    const data2 = [
        {
            "no": 1,
            "nama": "Rizkan Ramdani"
        },
        {
            "no": 2,
            "nama": "Ramdani"
        }
    ]

    let [active, setActive] = useState(false);
    const type = props.type;

    if(type == "allProduk"){
        setActive = true;
    }
    let [sendData, setSendData] = useState([]);

    useEffect(() => {
        getProduct();
        if(type == "allProduk"){
            setSendData(arrData);
        }else if(type == "videoFacebook"){
            setSendData(arrData);
        }
        console.log(sendData);
    }, [type]);
     
    const mappingData = arrData.map((dat => {
        return <Video key={dat.key} no={dat.id_product} nama={dat.title} type={dat.type} price={dat.price} ket={dat.descriptionx}  url={dat.url} thumbnail={dat.file}/>
    })) 
 

    return (
        <>
        <Navbar />
        <div className="my-5 pt-20 h-full w-full bg-[url('images/bgAbout.png')] bg-no-repeat bg-top-4 ">
            
            <div className="px-2">
                <h1 className="text-3xl font-semibold underline underline-offset-8 decoration-wavy decoration-[#1a4f5c] text-[#1a4f5c]">Gallery Ads Video</h1>
                
                <nav className="mt-5 grid grid-cols-3 md:grid-flow-col gap-2 w-full md:w-[40%] text-sm font-semibold">
                    <Link to="/Gallery" className={active ? "border p-1 bg-blue-500 text-center rounded shadow w-full active" : "border p-1 bg-blue-500 text-center rounded shadow w-full"}>All Video</Link>

                    <Link to="/videoFacebook" className={"border p-1 bg-blue-500 text-center rounded shadow w-full"}
                    >Video Facebook</Link>
                    <Link to="/instaStory" className="border p-1 bg-blue-500 text-center rounded shadow w-full"> InstaStory</Link>
                    <Link to="/videoYoutube" className="border p-1 bg-blue-500 text-center rounded shadow w-full">Video Youtube</Link>
                </nav>
                </div>
                <div className="flex flex-row flex-wrap justify-stretch mt-5 gap-4 px-10">
                    {mappingData}
                    {/* {sendData} */}
                </div>
        </div>
        <Footer />
        </>
    )
};