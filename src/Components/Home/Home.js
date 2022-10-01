import React from "react";
import Carousel from "./carousel";
import Category from './Category'
import Season from "./season";
import Store from "./store";
import Header from '../../Header'


const Home=()=>{
    return(
        
        <React.Fragment>
         <Header/>
            <Carousel/>
            <Category/>
            <Store/>
            <Season/>
        </React.Fragment>
    )
}

export default Home;