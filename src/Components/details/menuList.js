import React, { Component } from "react";
import Header from '../../Header'
class MenuDisplay extends Component{
    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id);
        this.props.finalOrder(this.orderId)
    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id)>-1){
            this.orderId.splice(this.orderId.indexOf(id),1)
        }
        this.props.finalOrder(this.orderId)
    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }
    renderMenu = ({menuData}) => {
        if(menuData){
            return menuData.map((item)=>{
                return(
                    <div  className="d-flex p-1 align-items-center " key={item.subcategory_id}>
                            <div className="col-md-7">
                            <b>{item.product_id}</b>
                            <img src={item.image} style={{height:80,width:80}} alt="img"/> &nbsp;
                            {item.product} - Rs.{item.price}
                            </div>
                            
                                <div className="nbtn">
                                <button className="btn btn-success"
                            onClick={() => {this.placeOrder(item.subcategory_id)}}>
                                <span className="fa-solid fa-plus"></span>
                            </button> &nbsp;
                            <button className="btn btn-danger"
                            onClick={() => {this.removeOrder(item.subcategory_id)}}>
                                <span className="fa-solid fa-minus"></span>
                            </button>
                                </div>

                        
                    </div>
                )
            })
        }
    }
    render(){
        <Header/>
        return(
              
                <div className="col-md-12 bg-success">
                <h1>Item Added</h1>
                Item Number {this.renderCart(this.orderId)} Added
              
              
                <div className="col-md-12 bg-info">
                    {this.renderMenu(this.props)}
                </div>
            
            </div>
            
                    
            
        )
    }
}

export default MenuDisplay