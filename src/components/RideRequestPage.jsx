import { React, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Label } from 'reactstrap';
import { useLocation, useHistory } from "react-router-dom";

function RideRequestPage() {
    const location = useLocation();
    const history = useHistory();
    console.log(location.state.custid);
    const [listOfResponse, setListOfResponse] = useState([{}]);
    console.log(location.state.rideResult);

    const handleSubmit = () => {

        fetch('http://localhost:8080/REQ', { // call api endpoint to get all offered rides
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                requestor: location.state.custid,
                approver: location.state.rideResult[0].custid
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (!result)
                    alert('Something went wrong !');
                else {
                    alert('Request Sent Successfully !');
                }
            })
    }
    const handleRide = () => {

        fetch('http://localhost:8080/status', { // call api endpoint to get all offered rides
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                requestor: location.state.custid

            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (!result)
                    alert('Something went wrong !');
                else {

                    alert('Status checked !');
                }
            })
    }
    return (

        <>
            <div className="formWrap">
                <div className="logoclass"></div>
                <h1>Your Rides</h1><hr /><hr />
                {location.state.rideResult.map((e, i) => {
                    return (
                        <div key={i}>

                            <span>
                                <br />
                                <Label><h2>{e.name}</h2></Label>
                            </span>
                            <br />
                            <span>
                                <Label>{e.start_time}</Label>
                            </span>
                            <br />
                            <span>
                                <Label>{e.origin_source} {e.destination}</Label>
                            </span>
                            <br />
                            <span>
                                <Label>{e.price}</Label>
                            </span>
                            <br />
                            <span>
                                <Button variant="success" onClick={handleSubmit} >
                                    Book A Ride
                                </Button>

                            </span>
                            <span >
                                <Button variant="success" onClick={handleRide} >
                                    Check Status
                                </Button>

                            </span>
                            <hr />
                        </div>)

                })}
            </div>

        </>
    )
}

export default RideRequestPage;
