import React from "react";

export default function Footer(){
    return(
        <footer className="bg-secondColor w-full h-full p-14  grid-cols-1 grid md:grid-cols-3 justify-items-center text-white text-xl">
            <div id="contact" className=" w-80 p-2">
                <h1 className="text-3xl font-semibold text-[#28606e]">Contact Us</h1>
                <div className="grid grid-cols-1 p-2 " style={{lineHeight: 3}}>
                    <span id="address" className="md:text-[18px] mb-3" style={{lineHeight: 1}}>
                        Jl.Sukaasih Kec.KutungguKau Kel.KapanPun, A1 - Jawa Barat
                    </span>
                    <span id="phone">
                        +6285-625-539-849
                    </span>
                    <span id="whatsapp">
                        +6285-625-539-849
                    </span>
                    <span id="facebook">
                        Conn.Ect-Universal
                    </span>
                    <span id="instagram">
                        @Conn.Ect-Universal
                    </span>
                    <span id="email" className="md:text-[18px]">
                        info@Conn.Ect-Universal.gmail.com
                    </span>
                </div>
            </div>
            <div id="services" className="w-80 p-2">
               <h1 className="text-3xl font-semibold text-[#28606e]">Services</h1> 
               <div className="grid grid-cols-1 p-2" style={{lineHeight: 3}}>
                    <span id="videoFacebook">
                        Video Facebok
                    </span>
                    <span id="instaStory">
                        Insta Story
                    </span>
                    <span id="videoYoutube">
                        Video Youtube
                    </span>
                    <span id="videoAnimasi">
                        Video Animasi
                    </span>
                    <span id="videoTiktok">
                        Video Tiktok
                    </span>
                    <span id="reelsInstagram">
                        Reels Instagram
                    </span>
               </div>
            </div>
            <div id="CONN.ECT" className="w-80 p-2">
                <h1 className="text-3xl font-semibold text-[#28606e]">CONN.ECT</h1>
                <div className="p-2">
                    <span>
                        ABOUT US
                    </span>
                </div>
            </div>
        </footer>
    )
}