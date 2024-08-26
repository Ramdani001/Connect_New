import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';
import axios from 'axios';

export default function Identitas(props){

    const [changeInput, setChangeInput] = useState({});
    const [oldData, setOldData] = useState({});
    const [images, setImages] = useState("");

    const [arrData, setArrData] = useState({});
    const [imageUrl, setImageUrl] = useState("");

    const getUsers = async() => {
        const id = localStorage.getItem('id_user');
        setChangeInput(prevState => ({
            ...prevState,
            id_user: parseInt(id),
            file: "",
        }));
        try {
            const response = await axios.get(`http://www.tempat-transit.cloud:3000/api/v1/users/${id}`);
            console.log(response.data[0]);
            setOldData(response.data[0]);
            setImageUrl(`images/products/${response.data[0].file}`);
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

    const changeData = (e) => {
        const { name, value } = e.target;

        if(name == "profile"){
            const file = e.target.files[0];
            setImages(file);
        }

        setChangeInput(prevState => ({
          ...prevState,
          [name]: value,
        }));
    };

    const [kirim, setKirim] = useState(false);

    const onSubmit =  async() => {

        if(!changeInput.username){
            setChangeInput(prevState => ({
                ...prevState,
                username: oldData.username,
            }));
        }else{
            console.log("Els");
            onSend()
        }

        setKirim(!kirim);
        
    }

    const [file, setFile] = useState({});

    const onSend = async() => {
        try {
            if(images){
                const formFile = new FormData();
                formFile.append('file', images);
                
                axios.post('http://www.tempat-transit.cloud:3000/upload', formFile)
                .then(res => {
                    
                    let data = JSON.stringify(res.data, null, 2);
                    
                    let file = res.data.filename;
                    
                    if(file){
                        // document.getElementById('file_input').value = file;
                        // const f = document.getElementById('file_input').value;
                        if (file) {
                            setFile(file);
                        }
 
                    }else{
                        console.log("Tidak Berhasil Upload");
                    }
                }).catch(er => console.log(er));
            }else{
                console.log(changeInput);
                const response = await axios.post("http://www.tempat-transit.cloud:3000/api/v1/users/updateUser", changeInput);
                if(response.status == 200){
                    console.log(response.data);
                    alert("Sucessfully Update Data");
                    window.location.reload();
                }
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
    const [stat, setStat] = useState("");
    useEffect(() => {
        if (file) {
            
            setChangeInput(prevState => ({
            ...prevState,
            file: file, 
          }));
          setImages("");
          setStat("Berhasil");
        }
      }, [file]);

      useEffect(() => {
        
        if (Object.keys(changeInput).length > 0) {
            onSend();
        }
      }, [stat]);

    useEffect(() => {
        if(kirim){
            onSend();
        }
    }, [changeInput]);

    useEffect(() => {
        getUsers();
    }, []);

    return (
    <div className="h-full transition-all duration-500 bg-yellow-300">
        <div className="bg-white shadow-md w-full h-full p-5">

            {/* Header */}
            <div className="flex gap-4 ">
                <div className="w-[60%] h-[70vh] bg-blue-400 rounded-2xl shadow-md">
                    {images ? <img src={URL.createObjectURL(images)} alt="" className="h-full w-full object-fill" /> : <img src={imageUrl} alt="" className="h-full w-full object-fill" />}
                </div>

                {/* Content */}
                <div className="p-3 border-2 w-full rounded-2xl">
                    <form id="frm_identitas" className="flex gap-5 flex-wrap mt-5">
                        <div className="col-2 w-full">
                            <h6 className="text-sm">Nama Lengkap</h6>
                            <input type="text" placeholder="Nama Lengkap" name="nama" className="border-b-2 w-full font-bold" required onChange={changeData}/>
                        </div>

                        <div>
                            <h6 className="text-sm">Username</h6>
                            <input type="text" placeholder="Username" name="username" className="border-b-2 font-bold" onChange={changeData}/>
                        </div>
                        
                        <div className="w-[50%]">
                            <h6 className="text-sm">No Handphone</h6>
                            <input type="text" placeholder="08xxxxxxxxxx" name="no_telp" required className="border-b-2 font-bold" onChange={changeData}/>
                        </div>
                        
                        {/* Alamat */}
                        <div className="col-2 w-full">
                            <h6 className="text-sm">Alamat</h6>
                            <input type="text" placeholder="Alamat Lengkap" name="alamat" required className="border-b-2 w-full font-bold" onChange={changeData}/>
                        </div>

                        {/* File */}
                        <input type="file" name="profile" className="border-2 bg-transparent p-4" onChange={(changeData)}/>

                        {/* Edit */} 
                        <div className="col-2 w-full mt-[10%]">
                            <button type="button" className="py-1 w-full bg-blue-800 mt-5 text-white shadow-md rounded-md" onClick={onSubmit}>Update</button>
                        </div>

                    </form>
                </div>
                {/* Content */}

            </div>
            {/* Header */}

        </div>
    </div>
    )
};