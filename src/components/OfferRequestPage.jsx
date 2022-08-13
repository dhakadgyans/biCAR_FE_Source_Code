import { React, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Label } from 'reactstrap';
import { useLocation, useHistory } from "react-router-dom";

function OfferRequestPage() {
    const history = useHistory();
    const location = useLocation();
    console.log(location.state.custid);
    const [listOfResponse, setListOfResponse] = useState([{}]);
    const [requestorId, setRequestorId] = useState(0);

    const handleAcceptOrReject = () => {

        fetch('http://localhost:8080/app', { // call api endpoint to get all offered rides
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                approver: location.state.custid,
                requestor: requestorId,
                reqStatus: 'ACT'
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (!result)
                    alert('Wrong Username or Password !');
                else {
                    alert("Accepted");
                    //setListOfResponse(result);
                    //console.log(listOfResponse);
                    // history.push('/OfferRequestPage', { custid: location.state.custid });
                }
            })
    }

    const handleSubmit = () => {

        fetch('http://localhost:8080/listOfReq', { // call api endpoint to get all offered rides
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                approver: location.state.custid
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (!result)
                    alert('Wrong Username or Password !');
                else {
                    setListOfResponse(result);
                    setRequestorId(result[0].custid);
                    console.log(listOfResponse);
                    history.push('/OfferRequestPage', { custid: location.state.custid });
                }
            })
    }


    return (

        <><div id="c"><a href={"http://localhost:3000/Login"}><h5 >Logout</h5></a>
            <div className="formWrap">
                <div className="logoclass"></div>
                <div>
                    <Button onClick={handleSubmit}>
                        Request Ride
                    </Button>

                </div>
                {listOfResponse.map((e, i) => {
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
                                <Label>{e.origin_source}   {e.destination}</Label>
                            </span>
                            <br />
                            <span>
                                <Button variant="success" >
                                    <a href={"http://localhost:3000/success"}> Accept</a>
                                </Button>
                                <Button variant="danger" >
                                    Decline
                                </Button>
                            </span>

                            <hr />
                        </div>)

                })}
            </div>
        </div>
        </>
    );
}

export default OfferRequestPage;
