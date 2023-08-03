import React from "react";

import Navigation from "./components/Navbar/Navigation/Navigation";
import Intro from "./components/Introduction/Intro/Intro";
import Image from "./components/UI/Image/Image";
import CardFactory from "./components/UI/Cards/CardFactory/CardFactory";
import ParentCard from "./components/Pricing/ParentCard/ParentCard";
import Footer from "./components/Introduction/Footer/Footer";
import Carousel from "./components/UI/Carousel/Carousel";

function App() {
    return (
        <>
            <div className="container">
                <Navigation />
                <Intro />
                <Image
                    src="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/62727ac8f4e4d65ee7b28106_1-Hero_profile_new_o.jpg"
                    alt="Intro-Image"
                    height="600px"
                    width="1000px"
                    className="img-fluid rounded mx-auto d-block my-5"
                />
                <CardFactory />
                <Carousel />
                <ParentCard />
            </div>
            <Footer />
        </>
    );
}

export default App;
