import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import DeleteOtp from './DeleteOtp';
import UpdateOtp from './UpdateOtp';
import Header from './Header';
import AddPayee from './AddPayee';
import ListPayee from './ListPayee';
import OtpForm from './OtpForm';
import UpdatePayee from './UpdatePayee';
import ing from './assets/ing-logo.jpg'
import './App.css';

function App() {
  return (
    <div>
    <div className="main">
    <ul>
      <li><img src={ing} width="100px" height="100px"/></li>
      <li className="titlespace"><h2 classsName="title">ING Customer Benificiary</h2></li>
    </ul>
    </div>
    <div className="slide">
        <marquee>ING the SAFER BANK in India</marquee>
    </div>
    <div>
      <section>SAHITHYA
      </section>
    </div>
     <BrowserRouter>
        <div className="middle">
          <Header/>
          <Route path='/header' component={Header}></Route>
          <Route path='/deleteOtp/:delId' component={DeleteOtp}></Route>
          <Route path='/updateOtp' component={UpdateOtp}></Route>
          <Route path='/addPayee' component={AddPayee}></Route>
          <Route path='/listPayee' component={ListPayee}></Route>
          <Route path='/otpForm' component={OtpForm}></Route>
          <Route path='/updatePayee/:idParam' component={UpdatePayee}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
