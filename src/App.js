import React from "react"
import {useState} from "react"
import './App.css';
import Header from "./header & footer/header"
import Footer from "./header & footer/footer"
import Gridcell from "./Gridcell"
function App() {
  const[clk,setclk] = useState(["","","","","","","","",""]);
  const[draw , setdraw]  = useState(false);
  const[isgameactive,setisgameactive] = useState(true)
  const[player , setplayer] = useState("X");
    const winning_condition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  
    //console.log(clk);
  const handleclick = (index)=>{
    //console.log(index);
    

    
    if(isgameactive && !draw )
    {
      const copied = [...clk];
    copied[index] = player;
    setclk(clk => copied);
    
    iswinner(copied);
    isdraw(copied);
    setplayer( player =>player =="X"?"0":"X");
     
      

    }
    
 
  }
  function isdraw(arr){
    setdraw(draw => !arr.includes(""))

  }
  function iswinner(arr)
  {
    for(let i=0;i<winning_condition.length;i++){
      const winningcondition = winning_condition[i];
      let a =arr[winningcondition[0] ];
      let b =arr[winningcondition[1] ];
      let c= arr[winningcondition[2] ];
  
     
      
      if(a ===b && b===c && a!="" && b!="" & c!="")
      {
          //console.log(player + "wins");
          setisgameactive(!isgameactive);
          setplayer( player =>player =="X"?"0":"X");
      }
    }

  }


  return (
    <>
     <Header/>
     <div className="board">
      {
        clk.map((ele , index)=>{
          return (<Gridcell handleclick = {handleclick} index={index} val={ele} />);
        })
      }
    </div>
     <Footer text = {player} isgameactive = {isgameactive} draw = {draw}/> 
    </>
  );
}

export default App;
