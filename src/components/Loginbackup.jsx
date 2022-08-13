import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Appglobal.scss';
import FormInput from './../components/FormInput';
import Button from './../components/Button';
import axios from 'axios';

const Login = props => {
  
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  // const handleSubmit = () => {

  //   setError(null);
  //   setLoading(true);
  //   axios.post('http://localhost:8080/notrestricted', { email: email, password: password}).then(response => {
  //     setLoading(false);
  //     props.history.push('/Feature');
  //   }).catch(error => {
  //     setLoading(false);
  //       setError("Something went wrong. Please try again later.");
  //   });
  // }
  const handleSubmit = () => {

    setError(null);
    setLoading(true);
    let item={email, password}
    fetch('http://localhost:8081/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == 'success')
                    alert('Invalid User');
                else
                    this.props.history.push('/Feature');
            })
  }
  



  return (
      <div className="formWrap">
        <form>
          <div className="logoclass"></div>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword(e.target.value)}
          />

          <Button  onClick={handleSubmit} name="login"> 
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

        </form>
      </div>
   
  );
}

export default Login;
