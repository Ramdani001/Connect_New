import React from "react";

export default function Services() {
    return(
        <div className="w-full h-full" id="sd">
            <h1 className="text-center p-3 mt-5 text-3xl font-semibold">Service</h1>

            {/* Services 1 */}
            <div id="adsVideo" className="p-10 grid grid-cols-1 place-items-center md:grid-cols-2 gap-5">
                <div className="bg-gray-300 w-full h-full rounded-md p-5 text-slate-600 relative cardServices">
                    <h1 className="text-6xl font-semibold text-red-400">01</h1>
                    <h2 className="text-3xl font-semibold mt-2 text-black/80">Ads Video</h2>
                    <div className="my-3">
                        <h5 className="text-xl md:text-2xl">
                            <i className="fa-regular fa-circle-check mr-2 text-green-600"></i>
                            Video Facebook
                        </h5>
                        <h5 className="text-xl md:text-2xl">
                            <i className="fa-regular fa-circle-check mr-2 text-green-600"></i>
                            Video Instagram
                        </h5>
                        <h5 className="text-xl md:text-2xl">
                            <i className="fa-regular fa-circle-check mr-2 text-green-600"></i>
                            Video Youtube
                        </h5>
                    </div>
                    <p className="mt-2">
                    Ads video Facebook, Instagram, dan YouTube adalah konten video berdurasi singkat yang dirancang khusus untuk platform media sosial tersebut. Jasa editing video iklan membantu dalam menciptakan iklan video yang menarik dan efektif, sehingga mampu menjangkau target audiens yang lebih luas dan meningkatkan engagement.
                    </p>
                </div>
                <div className="w-full h-ful p-5 grid place-items-center border-2 rounded shadow">
                    <img src={'images/services1.png'} alt="Services 1" />
                </div>
            </div>

            {/* Services 2 */}
            <div id="videoServices" className="p-10 grid grid-cols-1 place-items-center md:grid-cols-2 gap-5">
                <div className="bg-gray-300 w-full h-full rounded-md p-5 text-slate-600 relative cardServices order-1 md:order-2">
                    <h1 className="text-6xl font-semibold text-red-400">02</h1>
                    <h2 className="text-3xl font-semibold mt-2 text-black/80">Video Services</h2>
                    <div className="my-3">
                        <h5 className="text-2xl">
                            <i className="fa-regular fa-circle-check mr-2 text-green-600"></i>
                            Video Animasi
                        </h5>
                        <h5 className="text-2xl">
                            <i className="fa-regular fa-circle-check mr-2 text-green-600"></i>
                            Video Tiktok
                        </h5>
                        <h5 className="text-2xl">
                            <i className="fa-regular fa-circle-check mr-2 text-green-600"></i>
                            Video Reels Instagram
                        </h5>
                    </div>
                    <p className="mt-2">
                        <span className="font-olive">VIDEO ANIMASI</span> <br />
                        Video animasi adalah proses pembuatan gambar bergerak yang disusun secara berurutan untuk menciptakan ilusi gerakan. Dalam jasa editing, video animasi sering digunakan untuk menambahkan efek visual yang menarik, membuat penjelasan lebih mudah dipahami, atau menciptakan karakter dan dunia yang imajinatif.
                    </p>
                        <br />
                    <p>
                        <span className="font-olive">VIDEO TIKTOK</span> <br />
                        Video TikTok adalah jenis video pendek yang populer di platform TikTok, biasanya berdurasi singkat dan memiliki gaya yang unik. Jasa editing video TikTok membantu pengguna dalam mengedit video mereka agar lebih menarik, kreatif, dan sesuai dengan tren yang sedang viral.
                    </p>
                    <br />
                    <p>
                        <span className="font-olive">VIDEO REELS INSTAGRAM</span> <br />
                        Video Reels Instagram adalah fitur video pendek di Instagram yang mirip dengan TikTok. Jasa editing video Reels Instagram membantu pengguna dalam mengedit video mereka agar lebih menarik, kreatif, dan sesuai dengan tren yang sedang viral di platform Instagram.
                    </p>
                </div>
                <div className="w-full h-ful p-5 grid place-items-center order-2 md:order-1">
                    <img src={'images/services2.png'} alt="Services 2" className="border-2 shadow"/>
                </div>
            </div>

        </div>
    )
}