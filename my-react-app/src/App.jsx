import React from 'react'
import './App.css'
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
// import Home from './components/Home.jsx'
// import SearchParams from './search/SearchParams.jsx'
// import Slider from './nested/Slider.jsx'
// import Profile from './nested/Profile.jsx'
// import Dashboard from './nested/Dashboard.jsx'
// import Form from './form/FirstForm.jsx';
// import Uncontrol from './form/UncontrolledForm.jsx'
// import ThirdForm from './form/ThirdForm'
// import FirstForm from './modernform/FirstForm'
// import Hookform from './modernform/Hookform.jsx';
import TaskHook from './modernform/TaskForm.jsx';
function App() {
  return (
    // <BrowserRouter>
    //   <nav style={{
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     padding: '10px',
    //     backgroundColor: '#97d7ecff'
    //   }}>
    //     <NavLink
    //       to="/"
    //       className={({ isActive }) => (isActive ? 'active' : '')}
    //     >
    //       HOME
    //     </NavLink>

      
    //     <NavLink
    //       to="/dashboard/profile"
    //       className={({ isActive }) => (isActive ? 'active' : '')}
    //     >
    //       PROFILE
    //     </NavLink>
    //   </nav>

    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/search' element={<SearchParams/>}/>

    //     <Route path='/dashboard' element={<Dashboard />}>
    //       <Route path='profile' element={<Profile />} />
    //       <Route path='slider' element={<Slider />} />
    //     </Route>

    //   </Routes>
    // </BrowserRouter>
    <div>
      {/* <Form/> */}
      {/* <Uncontrol/> */}
      {/* <ThirdForm/> */}
      {/* <FirstForm/> */}
      {/* <Hookform/> */}
      <TaskHook/>
    </div>
  )
}

export default App
