import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Header from './components/Header';
import Presentation from './components/Presentation';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/Frame 19.png';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Offer from './components/Offer';
import PoolRidePage from './components/PoolRidePage';
import RentCarPage from './components/RentCarPage';
import PoolOptions from './components/PoolOptions';
import OfferRidePage from './components/OfferRidePage';
import RideRequestPage from './components/RideRequestPage';
import OfferRequestPage from './components/OfferRequestPage';
import Home from './components/Home';
import Success from './components/Success';
import Thankyou from './components/Thankyou';




const App = props => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Login'>
            <Login />
          </Route>
          <Route exact path='/Home'>
            <Home />
          </Route>
          <Route exact path='/Feature'>
            <Feature />
          </Route>
          <Route exact path='/Presentation'>
            <Presentation />
          </Route>
          <Route exact path='/Contact'>
            <Contact />
          </Route>
          <Route exact path='/Registration'>
            <Registration />
          </Route>
          <Route exact path='/Offer'>
            <Offer />
          </Route>
          <Route exact path='/Success'>
            <Success />
          </Route>
          <Route exact path='/Thankyou'>
            <Thankyou />
          </Route>
          <Route exact path='/PoolRidePage'>
            <PoolRidePage />
          </Route>
          <Route exact path='/RentCarPage'>
            <RentCarPage />
          </Route>
          <Route exact path='/PoolOptions'>
            <PoolOptions />
          </Route>
          <Route exact path='/OfferRidePage'>
            <OfferRidePage />
          </Route>
          <Route exact path='/RideRequestPage'>
            <RideRequestPage />
          </Route>
          <Route exact path='/OfferRequestPage'>
            <OfferRequestPage />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <About image= {aboutimage} title='BiCAR' button='get the app'/>
      <Presentation/>
      <About image= {aboutimage1} title='Deals' button='Go to Deals Section'/>
      <Contact/> */}
    </div>
  );
}

export default App;
