import React from "react";

import "./NavbarItem.css";

function NavbarItem(props) {
    return (
        <>
            <li className="nav-item">
                <button
                    className="nav-link navbar-list-item"
                    aria-disabled="true">
                    {props.title}
                </button>
            </li>
        </>
    );
}

export default NavbarItem;
