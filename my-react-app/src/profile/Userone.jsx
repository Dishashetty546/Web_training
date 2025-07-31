import React from 'react'
import { useParams } from 'react-router-dom'
import Userthree from './Userthree'
import Usertwo from './Usertwo'

const Userone = () => {
  const { username } = useParams()
  if (username === 'ram') return <Usertwo />
  if (username === 'radha') return <Userthree />
  return (
    <div>
      <h1>Welcome to my page</h1>
      <p>This is user ONE page !!</p>
      <p>Welcome {username}</p>
    </div>
  )
}

export default Userone