import React from 'react';
import PropTypes from "prop-types";

const Link = ({active, children, onClick}) =>{
    return(
        <button
            onClick={onclick}
            disabled={active}
            style={{
                marginLeft: "4px"
            }}
        >
            {children}
            {
                console.log("children: "+children+" active:"+active )
            }
        </button>
    );
}

Link.propTypes={
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;