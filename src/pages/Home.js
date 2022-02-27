import React from "react";
import Menubar from "../components/Menubar";
import Navigationbar from '../components/Navigationbar';
import Banner from "../components/Banner";
import MajorCatgories from '../components/MajorCatgories';
import BestSelling from '../components/BestSelling';
import FAQs from "../components/FAQ";
import Footer from "../components/Footer";

const Home  = () => {
    return(
        <>
            <Menubar/>
            <Navigationbar/>
            <Banner/>
            <MajorCatgories/>
            <BestSelling/>
            <FAQs/>
            <Footer/>
        </>
    )
}

export default Home;