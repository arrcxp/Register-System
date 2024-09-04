import React, { useContext, useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import DataContext from './DataContext';

function Register() {
  const { onSetInformation } = useContext(DataContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState();
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];

  const genders = ['Female', 'Male', 'Rather not say'];

  const sendInformation = (e) => {
    e.preventDefault();
    const information = {
      fname: firstName,
      lname: lastName,
      dob: `${birthDay} ${birthMonth} ${birthYear}`,
      gender: gender,
      username: username,
      password: password
    };

    onSetInformation(information);
    navigate('/');
  };

  const handleBday = (e) =>{
    setBirthDay(e.target.value > 0 && e.target.value < 32 ? e.target.value : '');
  }

  return (
    <div className='register__container'>
      <form onSubmit={sendInformation} className='form__register'>
        <h1>Register</h1>
        <div className='form__input__register'> 
          <input 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder='Enter First Name' 
            required
          />
        </div>
        <div className='form__input__register'>
          <input 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} 
            placeholder='Enter Last Name' 
            required
          />
        </div>
        <div className='form__select__register'>
          <select 
            value={birthMonth} 
            onChange={(e) => setBirthMonth(e.target.value)} 
            required
          >
            <option value="" disabled>Select Month</option>
            {months.map((month, index) => (
              <option key={index + 1} value={month}>{month}</option>
            ))}
          </select>
            <input 
              type='number' 
              value={birthDay}
              onChange={handleBday} 
              placeholder='Day' 
              required 
            />
            <input 
              type='text'
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)} 
              placeholder='Year' 
              required 
            />
        </div>
        <div className='form__select__gender'>
          <select 
            value={gender}
            onChange={(e) => setGender(e.target.value)} 
            required
          >
            <option disabled>Select Gender</option>
            {genders.map((gender, index) => (
              <option key={index + 1} value={gender}>{gender}</option>
            ))}
          </select>
        </div>
        <div className='form__input__register'>
          <input 
            type='text'
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='Enter Username' 
            required
          />
        </div>
        <div className='form__input__register'>
          <input 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}  
            placeholder='Enter Password' 
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          />
        </div>
        <div className='btn__login'>
          <Link to='/'>Back</Link>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register;
