import React from "react";

import "./Intro.css";

import ListItem from "../ListItem/ListItem";
import Button from "../../UI/Button/Button";

import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Intro() {
    return (
        <>
            <div
                className="mt-5 d-flex justify-content-center
        ">
                <div className="card text-center border-0 intro-card">
                    <div className="card-body">
                        <h5 className="card-title intro-title fs-1">
                            Dive Into Coursify
                        </h5>
                        <p className="card-text fs-5 mt-3 intro-body">
                            lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                        </p>
                        <ul class="list-group list-group-horizontal d-flex justify-content-center border-0">
                            <ListItem title="fast recruit" />
                            <ListItem title="efficient jobs" />
                            <ListItem title="high skills" />
                        </ul>
                        <div className="d-flex justify-content-center mt-3">
                            <Button
                                className="me-4 intro-buttons-google"
                                title="Continue with Google"
                                icon={<GoogleIcon />}
                            />
                            <Button
                                className="me-4 intro-buttons-linkedin"
                                title="Continue with LinkedIn"
                                icon={<LinkedInIcon />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;
