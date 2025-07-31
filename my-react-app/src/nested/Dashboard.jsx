import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <Link to="slider">Slider</Link>
        <Link to="profile">Profile</Link>
      </nav>

      <Outlet />
    </div>
  )
}

export default Dashboard
