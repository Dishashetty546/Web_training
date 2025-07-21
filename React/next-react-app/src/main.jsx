import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import First from './first.jsx';
import Second from './second.jsx'
// import Third from './Third.jsx';
// import Fourth from './Fourth.jsx'
import Card from './Card.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <h1>react APP </h1> */}
    {/* <First />
    <Second/>
    <Third/>
    // <Fourth/> */}
     {/* <Card name="Disha" city="Mangalore"/>
     <Card name="Trupthi" city="Udupi"/>
   <Card name="Adithya" city="Bennekudru"/> */}
    <App/>
    
  </StrictMode>
)
