import React from  'react';

const Sendbox = (props) => {
    return (
        <div className="bg black pad-10">
            <div className="row">
                <div className="col s10">
                    <input type="text" placeholder="Type your message here" className="white-text"/>
                </div>
                <div className="col s2">
                <button className=" btn-large waves-effect waves-light blue"><i className="material-icons">send</i></button>
                </div>
            </div>
            
        </div>
    )
    }
export default Sendbox;