import React from 'react'
import "./style.css"

 const Gridcell = (props)=> {
    
 
    return (
        <div className="cell" onClick={ ()=>{props.handleclick(props.index)}} id ={props.index}>{props.val}</div>
    );
}

export default Gridcell;