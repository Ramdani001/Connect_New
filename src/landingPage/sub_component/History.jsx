import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';
import Submessages from "../../admin/component/Submessages";
import AdminMessages from "../../admin/component/AdminMessages";
import axios from 'axios';
 
export default function History(props){
    const [arrData, setArrData] = useState([]);
    const [arrMess, setArrMess] = useState([]);
    const [statCheck, setStatCheck] = useState(0);

    const [idSend, setIdSend] = useState();

    const [id_user, setId_user] = useState(0);

    const getMessages = async () => {
        const id = localStorage.getItem("id_user");
        setId_user(id);
        console.log(id_user);
        try {
            const res = await axios.get(`http://localhost:3000/api/v1/messages/custSess/${id_user}`);
            // setArrMess(res.data);
            // await setIdSend(res.data);
     
            setArrMess(res.data);

            if (res.data.length > 0) {
                setIdSend(res.data[0].id_m);
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

    const [formData, setFormData] = useState({
        id_user: id_user,
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
            id_m: id_m,
            id_user: id_user
        };
        try {
            const response = await axios.post(`http://localhost:3000/api/v1/messages/insert/`, updatedFormData);
            
            if(response){
                const res = await axios.get(`http://localhost:3000/api/v1/messages/mess/${id_m}`);
                setArrMess(res.data);
                document.getElementById("send_mess").value = "";

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

    useEffect(() => {
        getMessages();
        if(!arrMess){
            setTimeout(() => {
                getMessages();
            }, 5000);
        }
    }, [arrMess]);

 

    return (
        <div >
            <div className="w-full h-full bg-white flex gap-3">

                <div className="w-full h-[86vh] bg-gray-400/20 p-3 flex flex-col">
                    <div className="flex-1 overflow-auto">
                        {arrMess.slice().reverse().map((item, index) => (
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
        </div>
    )
};