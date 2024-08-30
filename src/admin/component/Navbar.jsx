import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import Users from "../Users";
import Messages from "../Messages";
import Products from "../Products";
import Report from "../Report";


export default function Navbar(props){

    const [showContent, setShowAdmin] = useState("");

    const getUsers = async() => {
        const id = localStorage.getItem('id_user');
        
        try {
            const response = await axios.get(`http://www.tempat-transit.cloud:3000/api/v1/users/${id}`);
            setOldData(response.data[0]);
            setImageUrl(`images/products/${response.data[0].file}`);
 
            if(response.data[0].file !== ""){
                document.getElementById('prof').src = `images/products/${response.data[0].file}`;
            }else{
                document.getElementById('prof').src = `images/aboutImage.png`;
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
    useEffect(() => {
    
        const menus = localStorage.getItem('menus');
        getUsers();
        if (menus) {
            setShowAdmin(menus);
        }else{
            setShowAdmin("Dashboard");
        }
      }, []);
 
    const handleClick = (e) => {
        setShowAdmin(e.target.name);
    
        localStorage.setItem('menus', e.target.name);
      };
      const handleLogout = () => {
        localStorage.removeItem("id_user");
        window.location.href = '/Connect-App/login';
    }
    return(
        <>
            <main className="flex bg-gray-200 h-[100vh]">

            <div className="m-1 bg-blue-300 mt-2 rounded-md shadow-md w-[12%] h-[95vh]">
                <div className="p-3">
                    <img src="" alt="" id="prof" className="rounded-full shadow-md h-full w-full object-fill"/>
                </div>
                <hr className="w-full border-gray-200" />

                <div className="">

                    <div className="mt-5 grid content-between h-[80vh] gap-4">
                        <div className="grid gap-7">
                            <button name="Dashboard" className={showContent == "Dashboard" ? "font-popins flex items-center bg-gray-200 text-sm gap-2 hover:bg-gray-200 w-full p-2" : "font-popins flex items-center text-sm gap-2 hover:bg-gray-200  w-full p-2"} onClick={handleClick}>
                                <img src="images/dashboard.png" alt="" width={20}/>
                                Dashboard
                            </button>
                            <button name="Users" className={showContent == "Users" ? "font-popins flex items-center bg-gray-200 text-sm gap-2 w-full p-2 hover:bg-gray-200" : "font-popins flex items-center text-sm gap-2 w-full p-2  hover:bg-gray-200"} onClick={handleClick}>
                                <img src="images/user.png" alt="" width={20}/>
                                Users
                            </button>
                            <button name="Products" className={showContent == "Products" ? "font-popins flex items-center bg-gray-200 text-sm gap-2 w-full p-2 hover:bg-gray-200" : "font-popins flex items-center text-sm gap-2 w-full p-2  hover:bg-gray-200"} onClick={handleClick}>
                                <img src="images/product.png" alt="" width={20}/>
                                Products
                            </button>
                            <button name="Report" className={showContent == "Report" ? "font-popins flex items-center bg-gray-200 text-sm gap-2 w-full p-2 hover:bg-gray-200" : "font-popins flex items-center text-sm gap-2 w-full p-2  hover:bg-gray-200"} onClick={handleClick}>
                                <img src="images/report.png" alt="" width={20}/>
                                Report
                            </button>
                        </div>
                        <div className="flex place-center">
                            <button onClick={handleLogout} className="pl-5 font-popins flex items-center text-sm gap-2 w-full p-2  hover:bg-gray-800">
                                <img src="images/exit.png" alt="" width={100}/>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            {/* Main */}

            {showContent == "Dashboard" && <Dashboard />}
            {showContent == "Users" && <Users />}
            {showContent == "Messages" && <Messages />}
            {showContent == "Products" && <Products />}
            {showContent == "Report" && <Report />}

            </main>
        </>
    )
}