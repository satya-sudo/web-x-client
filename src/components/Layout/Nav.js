import React from 'react'; 
import './Styles/nav.css'
const Nav = (props) => {
    return (
        <nav className="col-12 bg black" id="nav-id">
            <div className="nav-wrapper">
                <div className="pad-y-10">
                    <span className="brand-logo">{props.logo}</span>
                </div>
                
            </div>
        </nav>
    );
}
export default Nav;
