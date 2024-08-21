import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import Users from "../Users";
import Messages from "../Messages";
import Products from "../Products";
import Report from "../Report";


export default function Navbar(props){

    const [showContent, setShowAdmin] = useState("");

    useEffect(() => {
    
        const menus = localStorage.getItem('menus');
    
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
    return(
        <>
            <main className="flex bg-gray-200 h-[100vh]">

            <div className="m-1 bg-blue-300 mt-2 rounded-md shadow-md w-[12%] h-[95vh]">
                <div className="p-3">
                    <img src="images/logo.png" alt="" />
                </div>
                <hr className="w-full border-gray-200" />

                <div className="">

                    <div className="mt-5 grid place-center gap-4">
                        <button name="Dashboard" className={showContent == "Dashboard" ? "font-popins flex items-center bg-gray-200 text-sm gap-2 hover:bg-gray-200 w-full p-2" : "font-popins flex items-center text-sm gap-2 hover:bg-gray-200  w-full p-2"} onClick={handleClick}>
                            <img src="images/dashboard.png" alt="" width={20}/>
                            Dashboard
                        </button>
                        <button name="Users" className={showContent == "Users" ? "font-popins flex items-center bg-gray-200 text-sm gap-2 w-full p-2 hover:bg-gray-200" : "font-popins flex items-center text-sm gap-2 w-full p-2  hover:bg-gray-200"} onClick={handleClick}>
                            <img src="images/user.png" alt="" width={20}/>
                            Users
                        </button>
                        <button name="Messages" className={showContent == "Messages" ? "font-popins flex items-center bg-gray-200 text-sm gap-2 w-full p-2 hover:bg-gray-200" : "font-popins flex items-center text-sm gap-2 w-full p-2  hover:bg-gray-200"} onClick={handleClick}>
                            <img src="images/pesan.png" alt="" width={20}/>
                            Messages
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