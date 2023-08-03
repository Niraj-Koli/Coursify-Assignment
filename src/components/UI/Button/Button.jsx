import React from "react";

function Button(props) {
    return (
        <>
            <button className={props.className} type="submit">
                {props.icon} {props.title}
            </button>
        </>
    );
}

export default Button;
