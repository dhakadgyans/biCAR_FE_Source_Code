import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Appglobal.scss';
import FormInput from './../components/FormInput';
import Button from './../components/Button';
import axios from 'axios';
import Popup from './Popup';

const RentCarPage = props => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [pincode, setPincode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const [show, setShow] = useState(false);
  const [popupmsg, setpopupmsg] = useState('test');
  const handleClose = () => setShow(false);
  const popupprops = { show, popupmsg, setShow };

  const handleRegistration = () => {

    fetch('http://localhost:8080/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Email: email,
        Password: password
      })
    }).then((Response) => Response.json())
      .then((result) => {
        console.log(result);
        if (result.status == '200') {
          alert("Registered succesfully")
          history.push('/Login');
        }
      })
  }




  return (
    <><div id="c"><a href={"http://localhost:3000/Login"}><h5 >Logout</h5></a>
      <Popup {...popupprops} />
      <div className="formWrap">
        <div className="logoclass"></div>
        <FormInput
          type="name"
          name="name"
          value={name}
          placeholder="Name"
          handleChange={e => setName(e.target.value)}
        />
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

        <FormInput
          type="text"
          name="address"
          value={address}
          placeholder="Address"
          handleChange={e => setAddress(e.target.value)}
        />

        <FormInput
          type="number"
          name="age"
          value={age}
          placeholder="Age"
          handleChange={e => setAge(e.target.value)}
        />

        <FormInput
          type="number"
          name="mobile"
          value={mobile}
          placeholder="Mobile"
          handleChange={e => setMobile(e.target.value)}
        />


        <FormInput
          type="number"
          name="pincode"
          value={pincode}
          placeholder="Pincode"
          handleChange={e => setPincode(e.target.value)}
        />
        <Button onClick={handleRegistration}>
          Registration
        </Button>

      </div>
    </div>
    </>
  );
}

export default RentCarPage;
