import React from "react";

function Client() { 
    return(
        <div id="Client" className="w-full h-full bg-secondColor flex flex-col justify-center items-center p-3">
            <h1 className="text-3xl font-semibold text-white mb-3">Our Client</h1>
            <div className="text-center border bg-white w-[90%] h-full p-5 rounded-tl-[3rem] rounded-br-[3rem] rounded-md ">
                <div id="contClient" className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 place-items-center gap-3 lg:flex lg:justify-center lg:justify-items-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-red-400 rounded-md shadow-md grid place-content-center">
                        <span>Client 1</span>
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-blue-400 rounded-md shadow-md grid place-content-center">
                        <span>Client 2</span>
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-orange-400 rounded-md shadow-md grid place-content-center">
                        <span>Client 3</span>
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-md shadow-md grid place-content-center">
                        <span>Client 4</span>
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-green-400 rounded-md shadow-md grid place-content-center">
                        <span>Client 5</span>
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-400 rounded-md shadow-md grid place-content-center">
                        <span>Client 6</span>
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-orange-200 rounded-md shadow-md grid place-content-center">
                        <span>Client 7</span>
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-purple-400 rounded-md shadow-md grid place-content-center">
                        <span>Client 8</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client;