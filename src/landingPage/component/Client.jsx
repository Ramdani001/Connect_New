import React from "react";

function Client() { 
    return(
        <div id="Client" className="w-full h-full bg-secondColor flex flex-col justify-center items-center p-3">
            <h1 className="text-3xl font-semibold text-white mb-3">Our Client</h1>
            <div className="text-center border bg-white w-[90%] h-full p-5 rounded-tl-[3rem] rounded-br-[3rem] rounded-md ">
                <div id="contClient" className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 place-items-center gap-3 lg:flex lg:justify-center lg:justify-items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-red-400 rounded-md shadow-md grid place-content-center bg-[url('images/mey.jpg')] bg-cover">

                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-md shadow-md grid place-content-center bg-[url('images/bumn.jpg')] bg-cover">
                        
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-md  relative shadow-md grid place-content-center bg-[url('images/jerome.jpg')] bg-cover">
                    
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-md relative shadow-md grid place-content-center bg-[url('images/jesica.jpg')] bg-cover">
                        
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-md shadow-md grid place-content-center bg-[url('images/lucinta.jpeg')] bg-cover">
                    
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-md shadow-md grid place-content-center bg-[url('images/miaw.jpg')] bg-cover">
                        
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-md shadow-md grid place-content-center bg-[url('images/rans.jpeg')] bg-cover">
                    
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-md shadow-md grid place-content-center bg-[url('images/nikita.jpg')] bg-cover">
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client;