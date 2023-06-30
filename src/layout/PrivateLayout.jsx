import React from "react";

const PrivateLayout = ({ children }) => {
    return (
        <>
            <div>PrivateLayout</div>
            {children}
            <div>FOOTER</div>
        </>
    );
};

export default PrivateLayout;
