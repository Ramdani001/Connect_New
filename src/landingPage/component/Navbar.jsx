import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
function Navbar() {

    const [oldData, setOldData] = useState({});
    // Get Data
    const getUsers = async() => {
        const id = localStorage.getItem('id_user');

        try {
            const response = await axios.get(`http://www.tempat-transit.cloud:3000/api/v1/users/${id}`);
            setOldData(response.data[0]);

            if(response.data[0].file !== null){
                document.getElementById('profile_foto').src = `http://www.tempat-transit.cloud/media/connect/images/products/${response.data[0].file}`;
            }else{
                document.getElementById('profile_foto').src = `http://www.tempat-transit.cloud/media/connect/images/products/aboutImage.png`;
            }
            
        } catch (error) {
            
            if (error.response) {
                

                console.error('Response error:', response);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                
                console.error('Request error:', error.request);
            } else {
                
                console.error('Error:', error.message);
            }
        }
    }
    // Get Data

    const [showNav, setShowNav] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [idUser, setIdUser] = useState();

    const handleLogout = () => {
        localStorage.removeItem("id_user");
        window.location.href = '/Connect-App/login';
    }

    useEffect(() => {
        const id_user = localStorage.getItem('id_user');
        if(id_user){
            setIdUser(id_user);
        }else{
            setIdUser(0);
        }
        console.log(idUser);
        getUsers();
    }, []);
   
    return(
        <>
            <nav className="grid grid-cols-1 md:grid-cols-3 text-center pt-1 text-white fixed top-0 w-full md:h-14 shadow-md bg-primary z-50">
                <Link to="/" onClick={() => {
                            window.scrollTo(0, 0);
                        } 
                    }
                     
                    className="md:order-2 order-1 md:text-5xl grid grid-cols-2 md:block justify-items-stretch">
                    <div className="flex justify-center md:mt-1 ml-8 md:ml-10">
                        <img src={ 'images/logo.png' } alt="Logo" width={250}/>
                    </div>
                    {/* <div className="md:hidden justify-self-end mr-3" onClick={() => setShowNav(!showNav)}>
                        <h2>M</h2>
                    </div>  */}
                </Link>
                <ul className={showNav ? "opacity-1 transition-all duration-1000 ease-in flex flex-col text-left gap-3 md:text-center md:flex-row md:gap-0 md:justify-around order-3 md:order-1 p-2  border-b-2 md:border-none md:pl-0" : "hidden md:text-center md:flex md:flex-row md:gap-0 md:justify-around order-3 md:order-1 p-2  border-b-2 md:border-none md:pl-0 h-0"}>
                    <Link to="/" onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                        className="text-xl"
                    >
                        Home
                    </Link>
                    <Link to="/Gallery">
                         Product
                    </Link>
                    {/* <Link to="/About"> 
                         About Me
                    </Link> */}
                </ul>
                <div id="profile" className={showNav ? "order-4 md:order-3 p-2 md:pl-0" : "hidden md:block md:order-3 p-2 md:pl-0"}>
                {idUser !=0 ? (
                    <div className="flex md:justify-end md:pr-8 items-center gap-3 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                        <h4 className="text-xl">
                             {oldData.nama ? oldData.nama : oldData.username}
                        </h4>
                        <div className="w-7 h-7 bg-gray-600 rounded-full">
                            <img src="" alt="" id="profile_foto" className="rounded-full shadow-md h-full w-full object-fill"/>
                        </div>
                    </div>
                    ) : 
                    <Link to="/login">
                        <div className="flex md:justify-end mr-7">
                            <button className="py-1 px-10 border bg-[#df5ac1] border-none rounded-md shadow-md hover:animate-bounce">Login</button>
                        </div>
                    </Link>
                    }

                    <div id="showDrop" className={showDropdown ? "flex justify-end duration-1000 transition-all translate-y-0 opacity-100" : "flex justify-end  -translate-y-52 opacity-10 duration-1000 transition-all"}>
                        <section className="text-start mr-16 w-[50%] border p-2 bg-primary border-none shadow-md rounded">
                            <Link to="/profile">
                                <div className="border p-1 rounded mt-2">
                                    <h4>Profile</h4>
                                </div>
                            </Link> 
                            <hr className="my-3" />
                            <div className="p-1">
                                {/* <Link to="/login"> */}
                                <button onClick={handleLogout}>
                                    <h4>Logout</h4>
                                </button>
                                {/* </Link>  */}
                            </div>
                        </section>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;