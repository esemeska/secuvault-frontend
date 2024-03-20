import React from "react";
import "./content.css";

const Content = ({items}) => {
    return (
        <div id="content">
            {items.map(item => 
                <React.Fragment>
                    {item}
                </React.Fragment>
            )}
        </div>
    );
}

export default Content;