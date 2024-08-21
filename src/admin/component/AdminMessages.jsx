import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function AdminMessages(props){
    const {name, message} = props;
    return(
        <>
            <div className="w-full bg-green-400 mt-4 text-end text-black p-2">
            <h6 className="font-olive">{name}</h6>
                <p>
                    {message}
                </p>
            </div>
        </>
    )
}