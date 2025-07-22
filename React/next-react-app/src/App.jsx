import { useState } from 'react'
import './App.css'
// import Card from './Card.jsx';
// import Store from './Store.jsx';
// import Paragraph from './Paragraph.jsx';
import Change from './Change.jsx';
import Buttons from './Buttons.jsx'
function App() {
  function handleClick() {
    alert("Function from parent component");
  }

  return (
    <>
      {/* <h1>React APP with vite tool</h1>
      <Card onClick={handleClick} label="click me" /> */}
      {/* <Store/> */}
      {/* <Paragraph/> */}
      <Buttons/>
      
    </>
  )
}

export default App;
