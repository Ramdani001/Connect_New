import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import axios from 'axios';
import { format } from 'date-fns';
import { stringify } from "postcss";

export default function Products(props){

    const [showModal, setShowModal] = useState(false);

    const [loadingShow, setLoadingShow] = useState(false);

    const [detailModal, setDetailModal] = useState(false);

    const [arrData, setArrData] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/api/v1/products');

    const getUsers = async () => {
        try {
            const response = await axios.get(url);
    
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


    const [images, setImages] = useState("");
    const currentDate = new Date();
    
    
    const [formData, setFormData] = useState({
        created_at: format(currentDate, 'yyyy-MM-dd'),
        updated_at: format(currentDate, 'yyyy-MM-dd'),
      });

     
      const changeInput = (e) => {
        const { name, value } = e.target;
        
        if(name == "thumbnail"){
            const file = e.target.files[0];
            setImages(file);
        }

        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));

    };

    const handleFileUpload = (file) => {
        // Set file state
        console.log("Handel"+file);
        setFormData(prevState => ({
          ...prevState,
          file: file
        }));
      };

      const [fileName, setFileName] = useState("");

    const submit_product = (e) => {
        e.preventDefault();
        
        const formFile = new FormData();
        formFile.append('file', images);
         
        axios.post('http://localhost:3000/upload', formFile)
        .then(res => {

            let data = JSON.stringify(res.data, null, 2);

            let file = res.data.filename;
            
            if(file){
                document.getElementById('file_input').value = file;
                const f = document.getElementById('file_input').value;
                // handleFileUpload(res.data.filename);

                setFileName(res.data.filename);

                // console.log(formData);
                // console.log(f);

                addProduct(formData);
            }else{
                console.log("Tidak Berhasil Upload");
            }
        })
        .catch(er => console.log(er));
        

    };


      const addProduct = async (productData) => {
        handleFileUpload(fileName);
        console.log(formData);
        try {

            const response = await axios.post('http://localhost:3000/api/v1/products/insert', productData);
            
            if(response.status == 200){
                console.log('Product added:', response.status);
                alert("Berhasil");
                window.location.reload();
            }
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

    const [id_user, setId_user] = useState("");
    const [arrProd, setArrProd] = useState([]);

    const handleDetail = async (e) => {
        const id_product = e;
        
        try { 

            const response = await axios.get(`http://localhost:3000/api/v1/products//${e}`);
            
            if(response.status == 200){
                setArrProd(response.data);
                setDetailModal(true)
            }
            console.log(arrProd);
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
        
    }

    const [updateModal, setUpdatModal] = useState(false);

    const handleUpdate = async (e) => {
        const id_product = e;
        
        try { 

            const response = await axios.get(`http://localhost:3000/api/v1/products//${e}`);
            
            if(response.status == 200){
                setArrProd(response.data);
                setUpdatModal(true);
                console.log(response);
            }
            console.log(arrProd);
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
        
    }

    const [formUpdate, setFormUpdate] = useState({
        updated_at: format(currentDate, 'yyyy-MM-dd'),
      });

      let title = document.getElementById('title_id');

      const [inputValue, setInputValue] = useState(title);
      
        const updateProd = (e) => {
          setInputValue(e.target.value);
          e.target.value += inputValue;
          console.log(e.target.value);
        };

    // const updateProd = (e) => {
    //     const { name, value } = e.target;

    //     setFormUpdate(prevState => ({
    //       ...prevState,
    //       [name]: value,
    //     }));
    // }
    const clear = (e) => {
        e.target.value = "";
        setInputValue(e.target.key);
    }
 

    const delFunct = async (e) =>{
        try {
            const response = await axios.delete(`http://localhost:3000/api/v1/products/${e}`);
            setUrl("http://localhost:3000/api/v1/products/");
            console.log('Data:', response);

            alert("Delete Berhasil");
            window.location.reload();
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

    useEffect(() => {
        getUsers();
    }, []);

    // URL.createObjectURL();

    return(
        <>
            <div className="p-5 bg-white m-2 w-full shdaow-md rounded-md">
                <div className={loadingShow ? "hidden" : "absolute top-0 border flex items-center justify-center left-0 w-screen bg-black/30 h-full"}>
                    <img src="images/lo-unscreen.gif"  alt="" />
                </div>
                <h1>Halaman Product</h1>
                <br />
                {/* Table */}
                <div className="py-3 flex justify-end">
                    <button className="rounded-md shadow-md text-white py-1 px-4 bg-blue-400" onClick={e => setShowModal(!showModal)}>Add Product</button>
                </div>

                <br />
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="border-2">No</th>
                            <th className="border-2">Name Product</th>
                            <th className="border-2">Price</th>
                            <th className="border-2">Type</th>
                            <th className="border-2">#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {arrData.forEach(element = > { */}
                        {arrData.map((item, index) => (
                        <tr key={index}>
                            <td className="border-2 p-3 text-center">
                            {index +1}
                            </td>
                            <td className="border-2 p-3">
                            {item.title}
                            </td>
                            <td className="border-2 p-3">
                                {item.type}
                            </td>
                            <td className="border-2 p-3">
                            {item.price}
                            </td>
                            <td className="border-2">
                            <div className="p-3 flex justify-center">
                                <button className="p-2" title="Edit" value={item.id_product}  onClick={() => handleUpdate(item.id_product)}>
                                <img src="images/edit.png" alt="Edit" width={20} />
                                </button>
                                <button className="p-2" title="Delete" onClick={() => delFunct(item.id_product)}>
                                <img src="images/trash.png" alt="Delete" width={20} />
                                </button>
                                <button className="p-2" title="Detail" value={item.id_product} onClick={() => handleDetail(item.id_product)}> 
                                    <label htmlFor="">{item.id_user}</label>
                                  <img src="images/detail.png" alt="Detail" width={20} />
                                </button>
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                {/* Modal add product */}
                <div className={`absolute w-full h-full left-0 bg-gray-700/50 top-0 flex justify-center items-center ${showModal == true ? "" : "hidden"} `}>

                    <div className="overflow-y-auto h-[calc(100%-3rem)] scrollbar-blue-400">
                        <div className="bg-white shadow-md rounded-md p-5">
                            <div className="flex justify-between">
                                <h2 className="font-olive p-3">Tambah Product</h2>
                                <button onClick={e => setShowModal(!showModal)} className="font-olive p-3">X</button>
                            </div>
                            <hr />

                            <form onSubmit={submit_product}method="POST">
                                <div className="p-5 overflow-y-auto font-popins h-[calc(100%-3rem)]">

                                    {/* Title */}
                                    <div className="rounded-md p-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm font-popins">Judul (Wajib isi)</label> <br />
                                        <textarea className="w-full p-3 text-sm" name="title" id="title" placeholder="Tambahkan judul yang menjelaskan video anda" onChange={changeInput}></textarea>
                                    </div>
                                    {/* Title */}

                                    {/* Deskription */}
                                    <div className="rounded-md mt-3 p-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm">Description</label> <br />
                                        <textarea rows={5} className="w-full p-3 text-sm" name="description" id="description" placeholder="Beritahu penonton tentang video anda" onChange={changeInput}></textarea>
                                    </div>
                                    {/* Deskription */}

                                    {/* Thumbnail */}
                                    <div className="rounded-md mt-3 p-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm">Thumbnail</label> <br />
                                        <input type="text" name="file" id="file_input" onChange={changeInput} />
                                        <label className="text-xs">Gunakan thumbnail yang menarik dan memikat perhatian penonton</label> <br />
                                        {images ? <img src={URL.createObjectURL(images)} alt="" className="w-[200px]" /> : ""}
                                        <br />
                                        <input type="file" name="thumbnail" className="border-2 bg-transparent p-4" onChange={changeInput}/>
                                    </div>
                                    {/* Thumbnail */}

                                    {/* Link Url */}
                                    <div className="rounded-md p-4 mt-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm">Link URL</label> <br />
                                        <textarea onChange={changeInput} className="w-full p-3 text-sm" name="url" id="url" placeholder="Harga untuk editing"></textarea>
                                    </div>
                                    {/* Link Url */}

                                    {/* Type Video */}
                                    <div className="rounded-md mt-3 p-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm">Type Video</label> <br />
                                        <select onChange={changeInput} name="type" id="type" className="p-3 w-full border-2 mt-2 rounded-md">
                                            <option className="p-2" select>- Type Video -</option>
                                            <option className="p-2" value="Instagram">Instagram</option>
                                            <option className="p-2" value="Facebook"> Facebook</option>
                                            <option className="p-2" value="Youtube"> Youtube</option>
                                        </select>
                                    </div>
                                    {/* Type Video */}

                                    {/* Price */}
                                    <div className="rounded-md p-4 mt-4 rounded-md shadow-md border-2 w-full h-full">
                                        <label className="text-sm">Price</label> <br />
                                        <textarea onChange={changeInput} className="w-full p-3 text-sm" name="price" id="price" placeholder="Harga untuk editing"></textarea>
                                    </div>
                                    {/* Price */}

                                    <div className="mt-10 justify-between flex gap-4">
                                        <button type="button" onClick={e => setShowModal(!showModal)} className="bg-gray-500 py-1 px-7 text-white rounded-md shadow-md">Cancel</button>
                                        <button type="submit" className="bg-blue-500 py-1 px-7 text-white rounded-md shadow-md">Submit</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Modal Detail product */}
                <div className={`absolute w-full h-full left-0 bg-gray-700/50 top-0 flex justify-center items-center ${detailModal == true ? "" : "hidden"} `}>

                    <div className="overflow-y-auto h-[calc(100%-3rem)] scrollbar-blue-400">
                        <div className="bg-white shadow-md rounded-md p-5">
                            <div className="flex justify-between">
                                <h2 className="font-olive p-3">Detail Product</h2>
                                <button onClick={e => setDetailModal(!detailModal)} className="font-olive p-3">X</button>
                            </div>
                            <hr />
                            {arrProd.map((item, index) => (

                                <div className="flex gap-4">
                                    <div>
                                        <iframe allow="accelerometer" src={item.url} frameBorder="0" width={400} height={300}></iframe>
                                    </div>

                                    {/* Right */}
                                    <div className="p-4 w-[300px] grid gap-0">
                                        <div>
                                            <div>
                                                <b className="font-popins">
                                                    Title
                                                </b>
                                            </div>
                                            <div>
                                                <span className="font-olive text-[13px]">
                                                    {item.title}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <b className="font-popins">
                                                    Type
                                                </b>
                                            </div>
                                            <div>
                                                <span className="font-olive text-[13px]">
                                                    {item.type}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <b className="font-popins ">
                                                    Price
                                                </b>
                                            </div>
                                            <div>
                                                <span className="font-olive text-[13px]">
                                                    Rp. {item.price}
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <b className="font-popins">
                                                    Description
                                                </b>
                                            </div>
                                            <div>
                                                <span className="font-olive text-[10px] w-full text-justify">
                                                    {item.description}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            
                            ))}

                        </div>
                    </div>
                </div>
                {/* Detail */}

                {/* Update */}
                <div className={`absolute w-full h-full left-0 bg-gray-700/50 top-0 flex justify-center items-center ${updateModal == true ? "" : "hidden"} `}>

                    <div className="overflow-y-auto h-[calc(100%-3rem)] scrollbar-blue-400">
                        <div className="bg-white shadow-md rounded-md p-5">
                            <div className="flex justify-between">
                                <h2 className="font-olive p-3">Update Product</h2>
                                <button onClick={e => setUpdatModal(!updateModal)} className="font-olive p-3">X</button>
                            </div>
                            <hr />
                            {arrProd.map((item, index) => (

                                <div className="flex gap-4">
                                    <div>
                                        <iframe allow="accelerometer" src={item.url} frameBorder="0" width={400} height={300} allowfullscreen></iframe>
                                        
                                        <img src={"images/products/"} alt="" />

                                    </div>

                                    {/* Right */}
                                    <div className="p-4 w-[300px] grid gap-0">
                                        <div>
                                            <div>
                                                <b className="font-popins">
                                                    Title
                                                </b>
                                            </div>
                                            <div>
                                                <input type="text" className="font-olive text-[13px]" 
                                                 value={item.title}  
                                                 onClick={clear}
                                                 onKeyUp={updateProd}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <b className="font-popins">
                                                    Type
                                                </b>
                                            </div>
                                            <div>
                                                <input type="text" className="font-olive text-[13px]" value={item.type} />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <b className="font-popins ">
                                                    Price
                                                </b>
                                            </div>
                                            <div>
                                                <input type="text" className="font-olive text-[13px]" value={item.price} />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <b className="font-popins">
                                                    Description
                                                </b>
                                            </div>
                                            <div>
                                                <input type="text" className="font-olive text-[10px] w-full text-justify" value={item.description} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            
                            ))}

                        </div>
                    </div>
                </div>
                {/* Update */}

            </div>
        </>
    )
}