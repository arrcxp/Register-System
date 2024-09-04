import React, { useContext } from 'react'
import './Home.css'
import DataContext from './DataContext'
import { Link } from 'react-router-dom';

function Home() {
  const { information } = useContext(DataContext);

  return (
    <div className='home__container'>
      {information.map((items) => (
        <div className='information__box'>
          <h1>Information</h1>
          <h2><span>Name: </span> {items.fname} {items.lname}</h2>
          <h2><span>Birthday: </span> {items.dob}</h2>
          <h2><span>Gender: </span> {items.gender}</h2>
          <h2><span>Username: </span> {items.username}</h2>
          <h2><span>Password: </span> {items.password}</h2>
          <div className='btn__logout'>
            <Link to='/'>Logout</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home