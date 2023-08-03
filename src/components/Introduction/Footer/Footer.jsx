import React from "react";

import "./Footer.css";

import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
    return (
        <>
            <div className="container-fluid footer-container mt-5">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-3">
                            <div className="card footer-card mt-2 text-center">
                                <div className="card-body">
                                    <CastForEducationIcon
                                        sx={{
                                            fontSize: 40,
                                            marginBottom: "0.4rem",
                                        }}
                                    />
                                    <span className="footer-title">C</span>
                                    <span className="footer-title">O</span>
                                    <span className="footer-title">U</span>
                                    <span className="footer-title">R</span>
                                    <span className="footer-title">S</span>
                                    <span className="footer-title">I</span>
                                    <span className="footer-title">F</span>
                                    <span className="footer-title">Y</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card footer-card mx-5 mt-2">
                                <div className="card-body">
                                    <p className="fs-4 text-warning">Company</p>
                                    <p>Alpha</p>
                                    <p>Beta</p>
                                    <p>Gamma</p>
                                    <p>Delta</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card footer-card mx-5 mt-2">
                                <div className="card-body">
                                    <p className="fs-4 text-danger">
                                        Resources
                                    </p>
                                    <p>Epsilon</p>
                                    <p>Zeta</p>
                                    <p>Iota</p>
                                    <p>Kappa</p>
                                    <p>Lambda</p>
                                    <p>Omicron</p>
                                    <p>Rho</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card footer-card mx-5 mt-2">
                                <div className="card-body">
                                    <p className="fs-4 text-info">Legal</p>
                                    <p>Sigma</p>
                                    <p>Omega</p>
                                    <p>Phi</p>
                                </div>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-center">
                            <hr class="border border-white opacity-75 w-100" />
                        </div>
                        <div className="container mb-5 d-flex justify-content-between ">
                            <span className="text-white ms-3 footer-end">
                                © Phoenix Technologies, All Rights Reserved.
                                2023
                            </span>
                            <span className="text-white me-3 footer-end">
                                <TwitterIcon
                                    sx={{
                                        margin: "0 5px",
                                        fontSize: "2rem",
                                        cursor: "pointer",
                                    }}
                                />
                                <FacebookIcon
                                    sx={{
                                        margin: "0 5px",
                                        fontSize: "2rem",
                                        cursor: "pointer",
                                    }}
                                />
                                <InstagramIcon
                                    sx={{
                                        margin: "0 5px",
                                        fontSize: "2rem",
                                        cursor: "pointer",
                                    }}
                                />
                                <LinkedInIcon
                                    sx={{
                                        margin: "0 5px",
                                        fontSize: "2rem",
                                        cursor: "pointer",
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
