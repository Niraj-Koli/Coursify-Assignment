import React from "react";

import "./LargeCard.css";

function LargeCard(props) {
    return (
        <>
            <div className="col-6 my-3">
                <div
                    className="card large-card p-3"
                    style={{ background: `${props.background}` }}>
                    <div className="card-body mx-4 my-2">
                        <h5 className="card-title fs-1 fw-semibold pb-3">
                            {props.title}
                        </h5>
                        <p className="card-text pt-2 mb-4">
                            {props.description}
                        </p>
                        <img
                            src={props.image}
                            alt={props.title}
                            className="img-fluid mt-2 large-card-image"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LargeCard;
