
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,newMode]=useState('light');

  //for alert
  const [alert,setAlert]=useState(null);
   
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //end alert

  const modeToggle=()=>{
    if(mode==="light"){
      newMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert('Dark mode enable','success');
    }
    else{
      newMode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light mode enable','success');

    }
  }

  return (
   <>

{/* <Navbar title="Project Utensils" home="Main Page" about="About Us"></Navbar> */}
{/* <Navbar title="project" home="index" about="Know About us"/> */}

<Navbar mode={mode} modeToggle={modeToggle}/>
<Alert  alert={alert}/>
<div className='container my-3'>
<TextForm showAlert={showAlert} mode={mode} heading="Enter your text"/>
<About accord1="Button 1" accord2="Button 2" accord3="Button 3"/>
</div>


  </>

  )

}

export default App;
