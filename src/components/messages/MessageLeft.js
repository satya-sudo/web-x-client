import React from 'react';


const MessageLeft = (props) => {
    return (
        <div className="row">
            <div className="col s8">
                <div className="card-panel bg black white-text">
                    {props.children}
                </div>
            </div>
            <div className="col s4">
            </div>

        </div>
    )
};

export default MessageLeft;
