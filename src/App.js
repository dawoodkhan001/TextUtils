import { useState } from 'react';
import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import Textform from './components/Textform';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <NavBar title= "TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
      <Textform heading="Enter the text to analyze below"  mode={mode}/>
      {/* <About /> */}
      </div>
      
    </>
  );
}

export default App;
