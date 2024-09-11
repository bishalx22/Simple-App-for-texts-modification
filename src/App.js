
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';



function App() {

  const [mode , setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode = ()=> {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","Success")
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //  document.title = 'TextUtils is Amazing mode';
      // } , 2000);
      // setInterval(() => {
      //   document.title = 'Installs TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success")
      document.title = 'TextUtils - Light Mode';
  }
}
  return (
   <>
   {/* navbar.js */}
   <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>   

   <Alert alert={alert}/>

   {/* TextForm.js */}
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading ="Enter the text to analyze :" mode={mode}/>  
  {/* <About/> */}
  
  </div>

  {/* <Display/> */}
  
   </>
  );
}

export default App;
