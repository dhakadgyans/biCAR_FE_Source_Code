import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Appglobal.scss';
import FormInput from './../components/FormInput';
import Button from './../components/Button';
import axios from 'axios';
import Popup from './Popup';

const Registration = props => {
  
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
	const[popupmsg, setpopupmsg]=useState('test');
	const handleClose = () => setShow(false);
	const popupprops={show,popupmsg,setShow};

  const handleRegistration = () => {

    fetch('http://localhost:8080/Customer/addUpdateCustomer', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                
                user: {
                  username: name,
                  password: password,
                  role: 'USER'},
                name: name,
                age: age,
                mobile: mobile,
                address: address,
                primary_id: 123,
                cust_type: 1,
                email: email,
                company_name: 'TSYS',
                rating: 4,
                pincode: pincode
                
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                //if (result.status == '200'){
                  if (result !== null || result !== '' || result !== undefined  ){
                  alert("Registered succesfully")
                  history.push('/Login');
                }    
            })
  }
  



  return (
    <>
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
   </>
  );
}

export default Registration;
