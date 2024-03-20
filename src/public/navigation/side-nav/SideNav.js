import React from "react";
import "./sidenav.css";

const SideNav = ({items, setActiveContent}) => {
    return (
        <div id="side-nav">
            {items.map((item, index) => (
                <button key={index} className="nav-item" onClick={() => setActiveContent(item.getContent())}>
                    {item.getTitle()}
                </button>
            ))}
        </div>
    );
}

export default SideNav;