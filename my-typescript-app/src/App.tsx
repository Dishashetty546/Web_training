import React from 'react';
import './App.css';
// import Data from './Data.tsx';
// import PropComp from './PropComp.tsx';
// import ButtonComp from './Button.tsx';
// import Card from './Card.tsx';

import State from './States.tsx';
import FormComp from './FormComponent.tsx'
function App() {
  // const handleClick = () => {
  //   alert("Button Clicked");
  // };

  return (
    <>
      {/* <h1>HELOOOOOO</h1>
      <Data/> */}
      {/* <PropComp name='disha' id={123} /> */}
      <h1>Hello Lifee</h1>

  
      {/* <ButtonComp label='Click' onClick={handleClick} />
      <ButtonComp label='Click here' onClick={handleClick} disabled /> */}
     {/* <Card >
      <h3>Card Title</h3>
      <p>this is a sample card</p>
     </Card>
     <Card >
      <h3>Card Title</h3>
      <p>this is a sample card</p>
     </Card> */}
     <FormComp/>
    </>
  );
}

export default App;
