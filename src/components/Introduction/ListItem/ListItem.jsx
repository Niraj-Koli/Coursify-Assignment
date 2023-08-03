import React from "react";

import "./ListItem.css";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

function ListItem(props) {
    return (
        <>
            <li class="list-group-item border-0 item fs-6">
                <CheckCircleOutlineIcon color="warning" /> {props.title}
            </li>
        </>
    );
}

export default ListItem;
