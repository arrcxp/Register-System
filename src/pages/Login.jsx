import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import DataContext from './DataContext';

function Login() {
  const { information } = useContext(DataContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const checkInfo = (e) => {
    e.preventDefault();
    {information.map((items) => {
        if(items.username === username && items.password === password){
            navigate('/home');
        
        } else{ 
            setHasError(true); 
        }
    })}
  };

  return (
    <div className='login__container'>
      <form onSubmit={checkInfo} className='form__login'>
        <h1>LOGIN</h1>
        <div className='form__input__login'>
          <input
            id='username'
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            placeholder='Enter Username'
            autoComplete='off'
            required
            className={hasError ? 'wrong' : ''}
          />
        </div>
        <div className='form__input__login'>
          <input
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Enter Password'
            autoComplete='off'
            required
          />
        </div>
        <div className='btn__login'>
          <Link to='/register'>Create Account</Link>
          <button type='submit'>Login</button>
        </div>
        {hasError && <div className='error'>Invalid username or password</div>}
      </form>
    </div>
  );
}

export default Login;
