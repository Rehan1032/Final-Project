import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './Footer';
import Home from './Components/Home/Home'
import listing from './Components/listing/listingapi'
import Details from './Components/details/details';
import placeOrder from './Components/booking/placeOrder';
import viewOrder from './Components/booking/viewOrder'
import Login from './Components/login/login';
import Register from './Components/login/register'


const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/listing/:categoryId" component={listing}/>
                        <Route exact path="/details" component={Details}/>
                        <Route exact path="/placeOrder/:restName" component={placeOrder}/>
                        <Route exact path="/viewOrders" component={viewOrder}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;