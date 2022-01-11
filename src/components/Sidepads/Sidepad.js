import React from 'react';

const Sidepad = (props) => {
    const {callback,id,Username} = props;

    return (
        <div >
            <div className="card color-3 white-text" onClick={()=>callback({
                id:id,
                Username:Username
            })}>
                <div className="card-content">
                    <h5>
                    <i className="material-icons">account_circle</i> {Username}
                    </h5>
                    <h6>{id}</h6>
                </div>
            </div>
        </div>
    );
}
export default Sidepad;