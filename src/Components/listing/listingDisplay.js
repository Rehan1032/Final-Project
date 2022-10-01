
import React from "react";
import Header from '../../Header'
import { Link } from "react-router-dom";

const ListingDisplay=(props)=>{

    const renderData=({listData})=>{
        <Header/>
        if(listData){
            if(listData.length>0){
                return listData.map((item)=>{
                    return(
                        <Link to={`/details?productId=${item.product_id}`} key={item._id}>
                        <div className="imgdiv" key={item._id}>
                             <img src={item.image} alt='img'/>

                            <div className="heading">
                            {item.product} 
                            </div>
                                <div className="hd">
                                <span id="hdng"> MRP:<del>₹320</del> </span>
                                <span id="subhdng"> Dmart:₹{item.price}</span>
                    
                                </div>
                                <div className="dropdown">
                            <select>
                                <option>{item.weight}</option>
                                
                            </select>
                       
                
                            </div>
                            <button className="myButton"><i class="fa-solid fa-cart-shopping"></i>ADD TO CART</button>
                         </div>
                         </Link>
                    )
                }
               
                )
              
            }else{
                return(

                    <div>
                        <h1>No Data As per Filter </h1>
                    </div>
                )
            }  
        }
        else{
            return(
                <div className="img">
                    <img src="/images/loader.gif" alt="loader"/>
                    <h2>Loading......</h2>
                </div>
            )
        }
    }
    return(
        
        <div id="content">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay