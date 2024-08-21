import React, { useEffect, useState } from "react";
import DetailModal from "./DetailModal";

 function Video(props) {
    // const data = props.data;

    const {key, no, nama, type, price, ket, url, thumbnail} = props;

    const [showDetail, setShowDetail] = useState(false);

    useEffect(() => {
        console.log(url);
    }, [])

    return(
        <>
            <div className={`shadow w-72 h-72 pt-10 hover:border-2 object-cover hover:border-blue-300 transition-all duration-300 ease-linear`} onClick={() => setShowDetail(!showDetail)}>
                <img src={"images/products/"+thumbnail} alt="Thumbnail" />
                <h2 className="text-center text-xl m-auto">{nama}</h2>
            </div> 
            {
                showDetail && <DetailModal key={key} nama={nama} type={type} no={no} price={price} ket={ket} url={url} />
            }
        </>
    )
} 

export default Video;