import React from "react";

function Image(props) {
    return (
        <>
            <img
                src={props.src}
                alt={props.alt}
                height={props.height}
                width={props.width}
                className={props.className}
            />
        </>
    );
}

export default Image;
