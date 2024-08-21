import React, { useEffect, useState } from "react";
import axios from 'axios';
export default function Users(props){

    const [arrData, setArrData] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/api/v1/users/');
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

    const delFunct = async (e) =>{
            try {
                const response = await axios.delete(`http://localhost:3000/api/v1/users/${e}`);
                setUrl("http://localhost:3000/api/v1/users/");
                console.log('Data:', response);
    
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
        console.log(e);
    }

    // const delFunct = (e) => {
    //     // e.preventDefault();
    //   };

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
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}