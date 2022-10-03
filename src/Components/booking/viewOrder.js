import React, {Component} from 'react';
import Header from '../../Header'
import axios from 'axios';
import './placeOrder.css'
import OrderDisplay from './orderDisplay'


const oUrl = "https://node-api321.herokuapp.com/Orders"



class ViewOrder extends Component{

    constructor(props){
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
       
        if(sessionStorage.getItem('loginStatus') === 'LoggedOut'){
            return(
                <>
                
                <div>
                 
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </div>
                </>
            )
        }
        return(
           <>
                <Header/>
                <OrderDisplay orderData={this.state.orders}/>
           </>
        )
    }

    //api call
    componentDidMount(){
        if(this.props.location){
            let query = this.props.location.search.split('&');
      
            if(query){
                let data = {
                    status: query[0].split("=")[1],
                    date: query[2].split("=")[1],
                    bank_name: query[3].split("=")[1],
                  };
          
                  console.log(data.status);
                  console.log(data.date);
                  console.log(data.bank_name);
                  let id = query[1].split("=")[1].split("_")[1];
                  console.log(id);
                fetch(`${oUrl}/${id}`,{
                    method:'PATCH',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                })
            }
        }
        let email = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(',')[1]:''
        axios.get(`${oUrl}?email=${email}`).then((res) => {this.setState({orders:res.data})})
        // fetch(oUrl).then(res=>res.json()).then(data=>console.log(data))   
     }

}

export default ViewOrder;