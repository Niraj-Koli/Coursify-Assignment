import React from "react";

import "./Carousel.css";

import Image from "../Image/Image";

import google from "./images/google.svg";
import microsoft from "./images/microsoft.svg";
import apple from "./images/apple.svg";
import amazon from "./images/amazon.svg";
import meta from "./images/meta.svg";
import tesla from "./images/tesla.svg";
import nasa from "./images/nasa.svg";
import nvidia from "./images/nvidia.svg";

function Carousel() {
    return (
        <>
            <div className="text-center fw-bold fs-1 mt-4">Trusted Clients</div>
            <div className="container">
                <hr class="border border-dark opacity-75 w-100" />
            </div>

            <div className="slider p-3 d-flex justify-content-center">
                <div className="logos-slide">
                    <Image
                        src={google}
                        alt="Google"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={microsoft}
                        alt="Microsoft"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={apple}
                        alt="Apple"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={amazon}
                        alt="Amazon"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={meta}
                        alt="Meta"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={tesla}
                        alt="Tesla"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={nasa}
                        alt="Nasa"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={nvidia}
                        alt="Nvidia"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={google}
                        alt="Google"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={microsoft}
                        alt="Microsoft"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={apple}
                        alt="Apple"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={amazon}
                        alt="Amazon"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={meta}
                        alt="Meta"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={tesla}
                        alt="Tesla"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={nasa}
                        alt="Nasa"
                        height="150px"
                        className="mx-5"
                    />
                    <Image
                        src={nvidia}
                        alt="Nvidia"
                        height="150px"
                        className="mx-5"
                    />
                </div>
            </div>

            <div className="container">
                <hr class="border border-dark opacity-75 w-100 mb-5" />
            </div>
        </>
    );
}

export default Carousel;
