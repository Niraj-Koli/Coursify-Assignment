import React from "react";

import "./SmallCard.css";

function SmallCard(props) {
    return (
        <>
            <div className="col-4 text-center my-4">
                <div className="card small-card p-3">
                    <div className="card-body">
                        <h5 className="card-title fs-1 fw-bold pb-3">
                            {props.title}
                        </h5>
                        <p className="card-text fw-semibold pt-2">
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SmallCard;
