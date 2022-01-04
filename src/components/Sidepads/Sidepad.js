import React from 'react';

const Sidepad = (props) => {
    return (
        <div >
            <div className="card bg black white-text">
                <div className="card-content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default Sidepad;