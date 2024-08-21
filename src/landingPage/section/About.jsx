import React from "react";

export default function About() {
    return(
        <div className="p-5 w-full h-full bg-[url('images/bgAbout.png')] bg-no-repeat bg-bottom-4">
            <h1 className="text-center text-3xl md:text-5xl text-[#1a4f5c]">Why do you choose 
                 <span className="font-bold text-black"> Conn</span>
                <span className="text-[#0300A6] font-bold">.Ect</span> ?
            </h1>
            <div className="grid md:grid-cols-2 mt-10 place-content-center">
                <div className="leftContent  mx-auto"> 
                    <div className="mx-auto card border border-gray-200 rounded-md shadow w-full md:w-[80%] bg-white">
                        <div className="card p-8 text-gray-600 h-full text-justify w-full text-xl">
                            <p className="mb-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, et! Expedita ab ipsa debitis iure fugiat facilis fuga nulla quisquam
                            </p>
                            <p className="mb-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, et! Expedita ab ipsa debitis iure fugiat facilis fuga nulla quisquam illo exercitationem omnis aspernatur explicabo possimus laborum quia culpa placeat odit itaque assumenda earum.
                            </p>
                            <p className="mb-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, et! Expedita ab ipsa debitis iure fugiat facilis fuga nulla quisquam illo exercitationem omnis aspernatur explicabo possimus laborum quia culpa placeat odit itaque assumenda earum.
                            </p>
                            <p className="mb-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, et! Expedita ab ipsa debitis iure fugiat facilis fuga nulla quisquam
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rightContent justify-self-center">
                    <img src={'images/aboutImage.png'}/>
                </div>
            </div>
        </div>
    ) 
}