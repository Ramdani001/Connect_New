import React, {useState} from "react";
import Identitas from '../sub_component/Identitas';
import History from '../sub_component/History'; 

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
export default function Profile() {

    const [showContent, setShowContent] = useState("Identitas");
 
    return( 
        <>
        <Navbar />
            <main className="flex justify-between mt-10 pt-10 h-screen w-full h-[100vh] p-10 bg-slate-200 bg-[url('images/bg_profile.jpg')] bg-cover">
            <aside className="border bg-white rounded-md shadow-md h-full w-1/3 p-10 ">
                <div className="h-full">
                    <div className="header">
                        <div className="flex items-center">
                            <div className="rounded-full w-16 h-16 border bg-yellow-400">

                            </div>
                            <div className="ml-3 ">
                                <h2 className="font-semibold">
                                    Rizkan Ramdani
                                </h2> 
                                <label className="text-slate-400 cursor-pointer"> Ubah profile <i class="fa-solid fa-pencil"></i></label>    
                            </div>
 

                        </div>  
                            <button className={showContent == "Identitas" ? "py-1 w-full px-4 transition-all duration-500 m-2 rounded bg-[transparent] border-y-2 border-blue-400" : "py-1 w-full px-4 m-2 rounded bg-[transparent]"} onClick={e => setShowContent("Identitas")}>Identity</button>
                            <br />
                            <button className={ showContent == "History" ? "py-1 w-full transition-all duration-500 px-4 m-2 rounded bg-[transparent] border-y-2 border-blue-400" : "py-1 w-full px-4 m-2 rounded bg-[transparent]"} onClick={e => setShowContent("History")}>Messages</button>
                            <br />
                            <button className={ showContent == "Cart" ? "py-1 w-full transition-all duration-500 px-4 m-2 rounded bg-[transparent] border-y-2 border-blue-400" : "py-1 w-full px-4 m-2 rounded bg-[transparent]"} onClick={e => setShowContent("Cart")}>My Cart</button>
                            <br />
                            <button className={ showContent == "Messages" ? "py-1 w-full transition-all duration-500 px-4 m-2 rounded bg-[transparent] border-y-2 border-blue-400" : "py-1 w-full px-4 m-2 rounded bg-[transparent]"} onClick={e => setShowContent("History")}>Transaction History</button>
                    </div>
                </div>
            </aside>
            <section className="border-blue-400 h-full w-full p-2">
                { showContent === "Identitas" ? <Identitas /> : <History /> }
                
            </section>
            </main>
            {/* <Footer /> */}
        </>
    )
}