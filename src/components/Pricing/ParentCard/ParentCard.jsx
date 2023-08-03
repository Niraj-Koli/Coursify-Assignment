import React from "react";

import "./ParentCard.css";

import PriceCard from "../PriceCard/PriceCard";

function ParentCard() {
    return (
        <>
            <div className="card parent-container mt-5 p-4">
                <div className="card-body">
                    <div className="row d-flex justify-content-center">
                        <PriceCard
                            title="Basic"
                            price="Free"
                            feature1="Alpha"
                            feature2="Beta"
                            feature3="Gamma"
                        />
                        <PriceCard
                            title="Premium"
                            price="500"
                            feature1="Delta"
                            feature2="Epsilon"
                            feature3="Zeta"
                        />
                        <PriceCard
                            title="Diamond"
                            price="2000"
                            feature1="Iota"
                            feature2="Kappa"
                            feature3="Lambda"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ParentCard;
