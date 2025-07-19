import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import First from './first.jsx';
import Second from './second.jsx'
import Third from './Third.jsx';
import Fourth from './Fourth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>react APP </h1>
    <First />
    <Second/>
    <Third/>
    <Fourth/>
    
  </StrictMode>
)
