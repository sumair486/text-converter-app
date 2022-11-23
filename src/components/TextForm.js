import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');

    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert('Upper Case','success');
    };

    const handleLoClick=()=>{
        let newText=text.toLowerCase()
        setText(newText);
        props.showAlert('Lower','success');

    };
    const handleClearClick=()=>{
      let newText="";
      setText(newText);
      props.showAlert('Clear','success');

    }
    const handleCapClick=()=>{
      let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
      setText(newText);
      props.showAlert('Capitalized','success');

    }
    const handleReplaceClick=()=>{
      let repval=prompt("Enter the word to be replaced:")
      let tobereplaced= new RegExp(repval,'g');

      let toreplace=prompt("Enter the text that you want to replace with:");
      
      let newText= text.replace(tobereplaced,toreplace);
      setText(newText);
      props.showAlert('Replace','success');

    }

    const handleSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert('Remove Spaces','success');

    }

    const handleCopy=()=>{
      let text=document.getElementById('myBox')
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Copy','success');

    }

    const handleOnChange=(event)=>{
        setText(event.target.value);

    };

  return (
<>

<div className="container mb-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
  <label className="form-label">Textarea</label>
  <textarea style={{backgroundColor:props.mode==="dark"?'#042743':'white',color:props.mode==="dark"?'white':'#042743'}} placeholder='Enter Your text' value={text} className="form-control" id="myBox" onChange={handleOnChange} rows="10"></textarea>
  <button className='btn btn-primary my-3 mx-2' onClick={handleUpClick}>Convert into Upper</button>
  <button className='btn btn-primary my-3 mx-2' onClick={handleLoClick}>Convert into Lower</button>
  <button className='btn btn-primary my-3 mx-2' onClick={handleClearClick}>Clear</button>
  <button className='btn btn-primary my-3 mx-2' onClick={handleCapClick}>Capitalize words</button>
  <button className='btn btn-primary my-3 mx-2' onClick={handleReplaceClick}>Replace words</button>
  <button className='btn btn-primary my-3 mx-2' onClick={handleSpaces}>Remove Spaces</button>
  <button className='btn btn-primary my-3 mx-2' onClick={handleCopy}>Copy</button>


  


  

</div>

<div className='container my-2' style={{color:props.mode==='dark'?'white':'#042743'}}>
<h2>Result</h2>
<p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words and {text.trim().length} character length</p>
<p> {0.008 * text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} Minutes read</p>


</div>


<div className='container mb-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
  <p>{text}</p>

</div>



</>

  )
}