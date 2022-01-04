import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Mainbar  from './Mainbar';
import Sidepad from '../Sidepads/Sidepad';
import Sendbox from './Sendbox';
import './Styles/Styles.css'

const Layout = (props) => {

    return (
        <div className="row">
            <Nav logo="Web-X" />
            <div className="col s3">
            <Sidebar >
                
                    <form >
                    <div className="row">
                    <div className="col s10">
                            <input type="text" placeholder="Search" className="white-text"/>
                        </div>
                        <div className="col s2">
                            <h5>
                                <i className="material-icons">search</i>
                            </h5>
                        </div>
                        
                    </div>
                    </form>
            
                <Sidepad >
                    <h6>8002715425</h6>
                </Sidepad>
                <Sidepad >
                    <h6>89873098456</h6>
                </Sidepad>
                <Sidepad >
                    <h6>8002322266</h6>
                </Sidepad>
            </Sidebar>

            </div>
            <div className="col s9">

            <Mainbar />
            <Sendbox />
            </div>
        </div>
    );
}

export default Layout;