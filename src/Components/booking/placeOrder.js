import React, {Component} from 'react';
import './placeOrder.css';
import Header from '../../Header'

const url = "https://node-api321.herokuapp.com/menuItem";
const oUrl ="https://node-api321.herokuapp.com/placeOrder"



class PlaceOrder extends Component{

    constructor(props){
        super(props)
        let sessionData = sessionStorage.getItem('userInfo')?sessionStorage.getItem('userInfo').split(','):[]

        this.state={
            id:Math.floor(Math.random()*10000),
            category:this.props.match.params.category,
            name:sessionData?sessionData[0]:'',
            email:sessionData?sessionData[1]:'',
            cost:0,
            phone:sessionData?sessionData[2]:'',
            address:'IT 98 Mumbai',
            menuItem:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('menu');
        fetch(oUrl,{
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        //.then(this.props.history.push('/viewBooking'))
        .then(console.log('order added'))
    }

    renderItem = (data) => {
        console.log(this.state.menuItem)

        if(data){
            return data.map((item) => {
                return (
                    <li
                      className="list-group-item d-flex justify-content-between lh-sm"
                      key={item._id}
                    >
                      <div>
                        <h6 className="my-0">{item.product}</h6>
                        
                       
                        <div className="p-2">
                          <img src={item.image} alt="Menu img" className="w-50 " />
                        </div>
                      </div>
                      <span className="text-muted">₹{item.price}</span>
                    </li>
                  );
                });
              }
            };

    render(){
        
        if(sessionStorage.getItem('loginStatus') === 'LoggedOut'){
            return(
                <div>
                
                    <center>
                        <h2>Login First To Place Order</h2>
                    </center>
                </div>
            )
        }
        
        return(
           
            
            <>
               <Header/>
                       <form action="https://paytwonow.herokuapp.com/paynow" method="POST">
          <div className="container text-center mt-5">
            <div className="row g-5">
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span style={{ color: "#18273c" }}>Your cart</span>
                  <span
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: "#18273c",
                      color: "white",
                    }}
                  >
                  {/* {orderId.length} */}
                  </span>
                </h4>

                <ul className="list-group mb-3">
                  {this.renderItem(this.state.menuItem)}

                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (RS)</span>
                    <strong>{this.state.cost}</strong>
                  </li>
                </ul>
                <button
                  className="w-100 btn  btn-lg mt-4"
                  style={{
                    backgroundColor: "#5cb85c",
                    color: "white",
                    marginBottom: "20%",
                  }}
                  type="submit"
                  onClick={this.checkout}
                >
                  PlaceOrder
                </button>
              </div>

              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Billing address</h4>
                <input type="hidden" value={this.state.id} name="id" />
                <input type="hidden" value={this.state.cost} name="cost" />
                <input
                  type="hidden"
                  value={this.state.category}
                  name="category"
                />

                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      name="name"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="you@example.com"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="address" className="form-label">
                      Contact
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="0123456789"
                      required
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      placeholder="Example: 1234 Main St"
                      value={this.state.address}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <hr className="my-4"></hr>
                {/* <div className=" card-text text-danger fs-5">
                  <span className=" fw-bold">Note: </span>If size and color are
                  not selected, default size and color will be added.
                </div> */}
              </div>
            </div>
          </div>
        </form>
                     
           </>
            
        )
    }

  //call api 
 componentDidMount(){

    let menuItem = sessionStorage.getItem('menu');
    let orderId = [];
    menuItem.split(',').map((item) => {
   
        orderId.push(parseInt(item));
        return 'ok';
    })

    console.log(JSON.stringify(orderId));
    const sdata={
        "id":orderId
    }
    console.log(sdata)
    fetch(url,{
        method: 'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(sdata)
    })
    .then((res) => res.json())
    .then((data) => {
        let totalPrice =0;
        data.map((item) => {
            totalPrice = totalPrice + parseFloat(item.price);
            return 'ok'
        })
        this.setState({menuItem:data,cost:totalPrice})
    })
} 
}

export default PlaceOrder;