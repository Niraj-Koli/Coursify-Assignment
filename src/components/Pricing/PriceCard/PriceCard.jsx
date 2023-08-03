import React from "react";

import "./PriceCard.css";

import Button from "../../UI/Button/Button";

import BoltIcon from "@mui/icons-material/Bolt";
import MarginIcon from "@mui/icons-material/Margin";
import CreateIcon from "@mui/icons-material/Create";

function PriceCard(props) {
    return (
        <>
            <div className="col-4">
                <div className="card mx-3 price-card">
                    <div className="card-body">
                        <h1 className="fs-2 my-3 ms-5 fw-bold">
                            {props.title}
                        </h1>
                        <h2 className="fs-3 pricing-color ms-5">
                            ₹ {props.price}
                            <span className="fs-6"> / month</span>
                        </h2>
                        <div className="my-4 ms-5">
                            <p>
                                <BoltIcon />
                                <span className="ms-2 fw-semibold">
                                    {props.feature1}
                                </span>
                            </p>
                            <p>
                                <MarginIcon />
                                <span className="ms-2 fw-semibold">
                                    {props.feature2}
                                </span>
                            </p>
                            <p>
                                <CreateIcon />
                                <span className="ms-2 fw-semibold">
                                    {props.feature3}
                                </span>
                            </p>
                        </div>
                        <div className="text-center">
                            <Button
                                title="Enroll Now"
                                className="pricing-buttons"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PriceCard;
