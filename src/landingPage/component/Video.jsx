import React, { useEffect, useState } from "react";
import DetailModal from "./DetailModal";

 function Video(props) {
    // const data = props.data;

    const {key, id_product, nama, type, price, ket, url, thumbnail} = props;
     
    const [showDetail, setShowDetail] = useState(false);
  
    return(
        <>
            <div className={`shadow w-72 h-72 pt-10 hover:border-2 object-cover rounded-md shadow-md hover:border-blue-300 grid place-center transition-all duration-300 ease-linear`} onClick={() => setShowDetail(!showDetail)}>
                <img src={"http://www.tempat-transit.cloud:81/media/connect/images/products/"+thumbnail} alt="Thumbnail" className="h-[200px] w-full object-cover rounded-tr-md rounded-tl-md"/>
                <h2 className="text-center text-xl m-auto font-olive">{nama}</h2>
            </div> 
            {
                showDetail && <DetailModal key={key} nama={nama} type={type} id_product={id_product} price={price} ket={ket} url={url} />
            }
        </>
    )
} 

export default Video;