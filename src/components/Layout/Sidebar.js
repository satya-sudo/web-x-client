import React from 'react'; 
import './Styles/sidebar.css'

const Sidebar = (props) => {
    return (
        <div className="pad-10 mar-10 height-80" id="sidebar">
            <div className="row">
                <div className="col-s12">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;