import React, { useEffect, useState } from "react";
import axios from 'axios';
import Submessages from "./Submessages";
import AdminMessages from "./AdminMessages";

export default function Messages(props){
    const [arrData, setArrData] = useState([]);
    const [arrMess, setArrMess] = useState([]);
    const [statCheck, setStatCheck] = useState(0);


    const getMessages = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/messages");
     
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
    }; 

    const [idSend, setIdSend] = useState();

    const handleMess = async(e) => {
        const itemId = e.currentTarget.getAttribute('data-id');
        console.log(itemId);
        setArrMess([]);
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/messages/stat/${itemId}`);
            
            if(response){
                setStatCheck(!statCheck);
                
                const res = await axios.get(`http://localhost:3000/api/v1/messages/mess/${itemId}`);
                setArrMess(res.data);
                await setIdSend(itemId);
                
                await console.log(idSend);
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
    }

    const [formData, setFormData] = useState({
        id_user: 1,
    });
     
      const changeMess = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));

    };

    const handleMessage = async (e) => {

        const id_m = e.currentTarget.getAttribute('data-id');
        
        const updatedFormData = {
            ...formData,
            id_m: id_m
        };
        try {
            const response = await axios.post(`http://localhost:3000/api/v1/messages/insert/cust/`, updatedFormData);
            
            if(response){
                const res = await axios.get(`http://localhost:3000/api/v1/messages/mess/${id_m}`);
                setArrMess(res.data);
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

        console.log(updatedFormData);
    }
    
    useEffect(() => {
        getMessages();
        console.log("Clicked");
    }, [statCheck]);

    setTimeout(() => {
        getMessages();
      }, 2000);

    return(
        <>
            <div className="w-full h-full bg-white flex gap-3">
                
                <div className="w-[25%] p-3 h-full bg-light border grid gap-3">
                    {arrData.map((item, index) => ( 
                        <div className="border p-2 relative flex" data-id={item.id_m} 
                        onClick={handleMess}>
                            <span name={item.id_m} className={item.stat == 1 ? "bg-blue-400/50 w-[20px] h-[20px] rounded-full absolute -mt-3 ml-44" : "hidden"}></span>
                            <h6>{item.nama}</h6>
                            <hr />
                        </div>
                    ))}
                </div>

                <div className="w-full h-[330px] bg-gray-400/20 p-3 flex flex-col">
                <div className="flex-1 overflow-auto">
                        {arrMess.map((item, index) => (
                            item.id_user !== 1 ? <Submessages key={index} name={item.head_mess} message={item.send_mess} /> : <AdminMessages key={index} name={item.head_mess} message={item.send_mess} />
                        ))}

                    </div>

                    <div className="bg-white w-full h-[50px] mt-3 border">
                        <form method="POST" className="flex w-full h-full gap-1 items-center justify-center">
                            <input type="text" placeholder="Text your message" className="p-2 w-full" name="send_mess" id="send_mess" onKeyUp={changeMess}/>
                            <button className="bg-gray-300 p-2 h-full" type="button" data-id={idSend} onClick={handleMessage}> SEND </button>
                        </form>
                    </div>
                </div>

                
            </div>
        </>
    )
}