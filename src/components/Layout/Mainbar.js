import React from 'react';
import './Styles/sidebar.css';
import MessageLeft from '../messages/MessageLeft';
import MessageRight from '../messages/MessageRight';


const Mainbar = (props) => {
    return (
        <div className="height-90 width-100" id="main-bar" >
            <MessageLeft >
                Hi asdjghaksjdhjkashd
            </MessageLeft>
            <MessageRight >
                asdfhlasjkdfhl  asdlfkhjl 
            </MessageRight>
            <MessageRight >
                asdfhlasjkdfhl  asdlfkhjl 
                asdfhjdasf sadfhjask asjdhh jask
                sdafhkjsdfhg jasdfh j asjdh jksad jhsa 
                sa udhoasdh lsahdl as asdh this.state.
            </MessageRight>
            <MessageRight >
                asdfhlasjkdfhl  asdlfkhjl 
            </MessageRight>
            <MessageLeft >
                Hi asdjghaksjdhjkashd
            </MessageLeft>
            <MessageLeft >
                Hi asdjghaksjdhjkashd
            </MessageLeft> <MessageLeft >
                Hi asdjghaksjdhjkashd
            </MessageLeft>

        </div>
    )
    }

export default Mainbar;
