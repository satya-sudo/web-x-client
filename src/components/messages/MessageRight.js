import React from 'react';

const MessageLeft = (props) => {
    return (
        <div className="row">
            
            <div className="col s8 offset-s4">
                <div className="card-panel  color-2 white-text">
                    {props.children}
                </div>
            </div>
            
        </div>
    )
};

export default MessageLeft;
