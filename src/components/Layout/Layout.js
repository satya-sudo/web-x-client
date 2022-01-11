import React,{useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import Mainbar  from './Mainbar';
import Sidepad from '../Sidepads/Sidepad';
import Sendbox from './Sendbox';
import Search from './Search';
import Header from './Header';
import './Styles/Styles.css'

const Dummy = [
    {
        "id":"8002715425",
        "Username":"Satyam Shree"
    },
    {
        "id":"8987308456",
        "Username": "Avinash"
    },
    {
        "id":"9988308456",
        "Username":"Rishika"
    }

];



const Layout = (props) => {

    const [select,SetSelect] = useState({
        id:"",
        Username:""
    });

    const side  = () => {
        const data =  Dummy.map(
            (data,index) => {return (<Sidepad callback={SetSelect} id={data.id} Username={data.Username} /> )})
        return data
        }

    useEffect(()=>{
        SetSelect(Dummy[0]);
    },[]);

    


    return (
        <div className="row">
            <div className="col s3">
            <Sidebar >            
                <Search />
                {side()}
            </Sidebar>

            </div>
            <div className="col s9">
            <Header phone={select.id} Username={select.Username} />
            <Mainbar />
            <Sendbox />
            </div>
        </div>
    );
}

export default Layout;