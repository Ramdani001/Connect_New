import React, { useEffect, useState } from "react";
import HeroSection from "./section/HeroSection";
import Client from "./component/Client";
import Services from "./section/Services";
import ContactUs from "./component/ContactUs";
import About from "./section/About";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function Main() {

    
    const sess = sessionStorage.getItem("email");

    const [userEmail, setUserEmail] = useState("");

    // Memeriksa apakah item tidak ada
    // if (sess === null) {
    //     window.location.href = '/login';
    // }

 
    return (
        <>
        <Navbar />
            <HeroSection />
            <Client />
            <Services />
            <ContactUs />
            <About />
        <Footer />
        </>
    )
}