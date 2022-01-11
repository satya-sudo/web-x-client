import React,{useState} from 'react';

const Search = (props) => {
    const [search,setSearch] =  useState('');
    const  {callback} = props;

    return (
            <form onSubmit={(e)=>{
                e.preventDefault();
                callback(search);
            }} >
                <div className="row">
                <div className="input-field col s12 white-text">
                    <i className="material-icons prefix" onClick={()=>callback(search)}>search</i>
                    <input type="text" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} className="white-text" />
                </div>
                </div>
            </form>
            
           
    )

};

export default Search;
