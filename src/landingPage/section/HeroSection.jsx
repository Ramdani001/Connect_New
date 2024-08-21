import React from "react";

export default function HeroSection() { 
    return( 
        <div id="heroSection" className="h-screen w-full bg-[url('images/2.jpg')] bg-no-repeat bg-cover grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="mt-20 md:p-14 text-center">
                <div className="p-2 rounded-md ">
                    <h1 className="text-2xl md:text-5xl mb-2">EDITING VIDEO</h1>

                    <h3 className="text-xl font-semibold">Ready for make your video can viral</h3>
                    <h4 className="text-1xl font-bold">
                        <span className="text-md">
                            <span className="">Conn</span>
                            <span className="text-[#0300A6]">.Ect</span>
                        </span> Always there for you</h4>
                </div>
                
            </div>
            <div className="w-full">
                <img className="w-full" src={'images/bgHero.png'} alt="s" />
            </div>
        </div>
    )
};