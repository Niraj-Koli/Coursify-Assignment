import React from "react";

import "./Navigation.css";

import NavbarItem from "../NavbarItem/NavbarItem";
import Button from "../../UI/Button/Button";

import CastForEducationIcon from "@mui/icons-material/CastForEducation";

function Navigation() {
    return (
        <>
            <div className="mt-2">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarToggler"
                            aria-controls="navbarToggler"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <button className="navbar-brand brand-button">
                            <CastForEducationIcon
                                sx={{
                                    fontSize: 40,
                                    marginBottom: "0.4rem",
                                }}
                            />{" "}
                            Coursify
                        </button>

                        <div
                            className="collapse navbar-collapse navbar-list "
                            id="navbarToggler">
                            <ul className="navbar-nav">
                                <NavbarItem title="Discover" />
                                <NavbarItem title="Courses" />
                                <NavbarItem title="Recruit" />
                                <NavbarItem title="Jobs" />
                            </ul>
                        </div>

                        <Button
                            className="me-4 navbar-buttons-login "
                            title="Login"
                        />
                        <Button
                            className="me-4 navbar-buttons-signup"
                            title="Signup"
                        />
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navigation;
