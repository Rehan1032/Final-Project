import React,{Component} from "react";
import axios from "axios";
import './detail.css'
import Header from '../../Header'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from "react-router-dom";
import MenuDisplay from "./menuList";


const url="https://node-api321.herokuapp.com/details?productId="
const  rurl = "https://node-api321.herokuapp.com/menu/"

class Details extends  Component{
    constructor(props){
        super(props)
        this.state={
            details:'',
            menuList:'',
            categoryId:sessionStorage.getItem('categoryId'),
            userItem:''
        }
    }

    addToCart=(data)=>{
        this.setState({userItem:data})
    }

    proceed=()=>{
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.product}`)
    }


    render(){
        let {details} = this.state
        return(
            <>
            <Header/>
              <div id="mainContent">
                    <div className="imgDiv">
                        <img src={details.image} alt="img"/>
                    </div>
                    <div className="contentDiv">
                        <h2>{details.product}</h2>
                        <span>231 Customers Say Good </span>
                        <h3><del> MRP : ₹ 1000</del></h3>
                        <h3>Dmart : {details.price}</h3>
                        
                        <div class="feature_container">
                            <figure>
                                <img src="https://i.ibb.co/wJvrhYg/veg.png" class="featureIcon" alt="mg"/>
                                <figcaption>Pure Veg</figcaption>
                            </figure>
                            <figure>
                                <img src="https://i.ibb.co/mD3jpgc/sentizied.png" class="featureIcon" alt="img" />
                                <figcaption>Fully Senatized</figcaption>
                            </figure>
                        </div>
                         <Tabs>
                        <TabList>
                        <Tab>About us</Tab>
                        <Tab>Contact</Tab>
                        </TabList>

                        <TabPanel>
                        <h2>{details.product}</h2>
                        <p>{details.product} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
        </p>
                        </TabPanel>
                        <TabPanel>
                        <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                    <div>
                            <Link to={`/listing/${this.state.categoryId}`} className="btn btn-danger">Back</Link> 
                            <button className="btn btn-light" onClick={this.proceed}>Procees</button>
                        </div>
                     </div>
                </div>
                <div className="col-md-12">
                    <MenuDisplay menuData={this.state.menuList}
                    finalOrder={(data)=>{this.addToCart(data)}}/>
                </div>
         
            </>
        )
        
    }
    
          
    

    // api calling 
    async componentDidMount(){
        let productId = this.props.location.search.split('=')[1]
        let response = await axios.get(`${url} ${productId}`)
        let menuData = await axios.get(`${rurl} ${productId}`)
        this.setState({details:response.data[0],menuList:menuData.data})
        sessionStorage.setItem("category",menuData.data[0].category);
    }
}

export default Details