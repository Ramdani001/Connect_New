import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Submessages(props){

    const {name, message} = props;

    return(
        <>
            <div className="w-full mt-2 bg-white p-2">
                <h6 className="font-olive">{name}</h6>
                <p>
                    {message}
                </p>
            </div>
        </>
    )
}