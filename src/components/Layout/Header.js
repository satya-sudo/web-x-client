import React from 'react';

const Header = (props) => {
    const {phone,Username} =  props;

    return (
        <div className=" color-2 pad-10 width-100 white-text" id="header-bar" >
            <div className="row">
                <div className="col s10">
                    <h5>
                    <i className="material-icons">account_circle</i> {Username}
                    </h5>
                    <h6>{Username}</h6>
                </div>
                <div className="col s2">
                    <h5>
                    <button className="btn color-2">Logout</button>

                    </h5>
                </div>
            </div>
            
        </div>


    );

};

export default Header;

