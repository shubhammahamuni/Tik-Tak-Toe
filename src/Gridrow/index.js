import React from 'react'
import Gridcell from "../Gridcell"
import "./style.css"
const Gridrow = (props)=> {
    //console.log(props.row, props.rowindex)
    let gridrow = [<Gridcell /> ,<Gridcell/> ,<Gridcell/>];
    return (
        <div className="row-cell">{props.row.map((col,colindex)=>(<Gridcell rowindex={props.rowindex} colindex ={colindex} val = {col} handleclick ={props.handleclick}/>))}</div>
    );
}

export default Gridrow;