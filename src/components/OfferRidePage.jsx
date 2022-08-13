import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Appglobal.scss';
import FormInput from './../components/FormInput';
import Button from './../components/Button';
import Popup from './Popup';
import { DateTime } from 'react-datetime-bootstrap';
import DateTimePicker from 'react-bootstrap-date-time-picker';
import TimePicker from 'react-time-picker';
import DatePicker from 'react-datepicker';
import { useLocation } from "react-router-dom";





const OfferRidePage = props => {

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
    const location = useLocation();
    console.log(location.state.custid);
    const [show, setShow] = useState(false);
    const [popupmsg, setpopupmsg] = useState('test');
    const handleClose = () => setShow(false);
    const popupprops = { show, popupmsg, setShow };
    const [time, setTime] = useState('00:00');
    const [fare, setFare] = useState();
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const handleTimeChange = (e) => {
        setTime(e);
    }
    const handleDate = (e) => {
        setStartDate(e);
    }

    var mydate = new Date();
    var sa = mydate.toISOString(mydate);
    var datevalue = sa.split('T');
    var today = datevalue[0];

    const [startDate, setStartDate] = useState(new Date());
    console.log(time);
    const handleRegistration = () => {

        fetch('http://localhost:8080/offerRide', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                custid: location.state.custid,
                date: startDate,
                start_time: time,
                ride_price: fare,
                origin_source: source,
                destination: destination,
                owner: true

            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(startDate);
                if (result !== null) {
                    alert("Ride created succesfully")
                    history.push('/OfferRequestPage', { custid: location.state.custid });
                }
            })
    }
    return (
        <>
            <div id='random'>

                <Popup {...popupprops} />

                <div className="formWrap">
                    <div className="logoclass"></div>
                    <div>
                        <h1>Offer A Ride</h1>
                    </div>
                    <FormInput
                        type="date"
                        name="startDate"
                        value={startDate}
                        placeholder="Date"
                        handleChange={e => setStartDate(e.target.value)}
                    />

                    <FormInput
                        type="time"
                        name="time"
                        value={time}
                        placeholder="Time"
                        handleChange={e => setTime(e.target.value)}
                    />

                    <FormInput
                        type="number"
                        name="fare"
                        value={fare}
                        placeholder="Fare ₹"
                        handleChange={e => setFare(e.target.value)}
                    />

                    <FormInput
                        type="text"
                        name="source"
                        value={source}
                        placeholder="Source"
                        handleChange={e => setSource(e.target.value)}
                    />

                    <FormInput
                        type="text"
                        name="destination"
                        value={destination}
                        placeholder="Destination"
                        handleChange={e => setDestination(e.target.value)}
                    />

                    <Button onClick={handleRegistration}>
                        Create
                    </Button>

                </div>
            </div>

        </>
    );
}

export default OfferRidePage;

