import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Appglobal.scss';
import FormInput from './../components/FormInput';
import Button from './../components/Button';
import axios from 'axios';
import Navbar from './Navbar';
import { logRoles } from '@testing-library/dom';

const Login = props => {

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const resetForm = () => {
    setUsername('');
    setPassword('');
  };
  const handleSubmit = () => {

    fetch('http://localhost:8080/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    }).then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if (!result)
          alert('Wrong Username or Password !');
        else
          history.push('/Offer', { custid: result.custid });
      })
  }
  return (
    <>
      <div className="formWrap">
        <div className="logoclass"></div>
        <FormInput
          type="username"
          name="username"
          value={username}
          placeholder="Username"
          handleChange={e => setUsername(e.target.value)}
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          handleChange={e => setPassword(e.target.value)}
        />

        <Button onClick={handleSubmit}>
          LogIn
        </Button>

        <div className="links">
          <Link to="/registration">
            Register
          </Link>
          {` | `}
          <Link to="/recovery">
            Reset Password
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
