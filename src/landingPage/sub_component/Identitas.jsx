import React, { useEffect, useState } from "react";
import { Link }  from 'react-router-dom';


export default function Identitas(props){

    const [showInput, setShowInput] = useState(false);

    console.log(showInput);

    return (
    <div className="h-full transition-all duration-500 bg-yellow-300">
        <div className="bg-white shadow-md w-full h-full p-5">

            {/* Header */}
            <div className="flex gap-4 ">
                <div className="w-[60%] h-[70vh] bg-blue-400 rounded-2xl shadow-md">
                </div>

                {/* Content */}
                <div className="p-3 border-2 w-full rounded-2xl">
                    <form id="frm_identitas" className="flex gap-5 flex-wrap mt-5">
                        <div className="w-[50%]">
                            <h6 className="text-sm">Nama Depan</h6>
                            <input type="text" placeholder="Nama Depan" name="name_d_iden" className="border-b-2 font-bold active:border-0"/>
                        </div>
                        <div>
                            <h6 className="text-sm">Nama Belakang</h6>
                            <input type="text" placeholder="Nama Belakang" name="name_b_iden" className="border-b-2 font-bold"/>
                        </div>

                        {/*  */}
                        <div className="w-[50%]">
                            <h6 className="text-sm">Alamat Email</h6>
                            <input type="text" placeholder="Alamat Email" name="email_iden" className="border-b-2 font-bold"/>
                        </div>

                        <div>
                            <h6 className="text-sm">Username</h6>
                            <input type="text" placeholder="Username" name="username" className="border-b-2 font-bold"/>
                        </div>
                        
                        {/* Alamat */}
                        <div className="col-2 w-full">
                            <h6 className="text-sm">Alamat</h6>
                            <input type="text" placeholder="Alamat Lengkap" name="alamat_iden" className="border-b-2 w-full font-bold"/>
                        </div>

                        <div className="w-[50%]">
                            <h6 className="text-sm">No Handphone</h6>
                            <input type="text" placeholder="08xxxxxxxxxx" name="no_telp" className="border-b-2 font-bold"/>
                        </div>
                        
                        {/* Edit */} 
                        <div className="col-2 w-full mt-[10%]">
                            <button type="button" className="py-1 w-full bg-blue-800 mt-5 text-white shadow-md rounded-md" onClick={e => setShowInput(!showInput)}>Update</button>
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