import React, { useState } from 'react'

export default function About(props) {
    const [MyStyle,newStyle]=useState({
        color:'black',
        backgroundColor:'white'
        
    })

    const [myBtn,setBtn]=useState("Enable Dark mode")

    const colorChange=()=>{
        if(MyStyle.color==="black"){
            newStyle({
                color:'white',
                backgroundColor:'black',
                border:"1px solid white"
            })
            setBtn("Enable Light Mode");
        }
        else{
            newStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtn("Enable Dark Modes");

        }

        
    }

  return (
    
<div className='container my-3'>
<button onClick={colorChange} className='btn btn-primary'>{myBtn}</button>

</div>
    </div>
  )
}
