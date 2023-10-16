import React from "react";
import About from "./components/aboutus";
import CustomCarousel from "./components/carousel"
import Contact from "./components/contactbanner";

export default function index() {
    return(
        <>
        <CustomCarousel/>
        <About/>
        <Contact/>
        </>
    )
    
}
