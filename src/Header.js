import React,{Component} from "react";
import { Link } from "react-router-dom";

import './Header.css'



const url="https://djwt.herokuapp.com/api/auth/userinfo"
class Header extends Component{
  constructor(props){
    super(props)

    this.state={
        userData:'',
        username:'',
        userImg:''
    }
}

handleLogout = () => {
    sessionStorage.removeItem('ltk')
    sessionStorage.removeItem('userInfo')
    sessionStorage.setItem('loginStatus','LoggedOut')
    this.setState({userData:''})
    this.props.history.push('/')

}

conditionalHeader = () => {
    if(this.state.userData.name){
        let data = this.state.userData;
        let outputArray = [data.name,data.email,data.phone];
        sessionStorage.setItem('userInfo',outputArray);
        sessionStorage.setItem('loginStatus','LoggedIn')
        return(
            <>
                <Link className="btn btn-success" to="/login">
                <span className="glyphicon glyphicon-user"></span> Hi {data.name}   
                </Link> &nbsp;
                <button className="btn btn-danger" 
                onClick={this.handleLogout}>
                    <span className="glyphicon glyphicon-log-out"></span>  Logout   
                </button> 
            </>
        )

    }else{
        return(
            <>
                 <Link className="navitem1" to='/login'> 
                      <i className="far fa-user" ></i> Login /
                      <Link className="navitem1 " to='/register'> 
                        Register </Link>
                        </Link>
            </>
        )
    }
}

    render(){
        return(
            <header>
                    <nav className="navbar">

                    <div className="navinfo">

                    <img src="https://i.ibb.co/G5bRxts/logo.png" alt="" className="logo"/>

                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>

                        </form>

                    </div>

                    </div>


                     
                      <ul className="navitems" >
                      
                        {this.conditionalHeader()}
                       

                  

                  <li className="navitem1"> <i className="fas fa-shopping-cart "> </i> Cart</li>

                </ul>
              </nav>
            <div id="bd">
                <div className="category">


                     <li className="rb"> <Link to ="listing/listing.html"> Dmart Grocery </Link> </li>
                     <li> <Link to="listing/listing.html"> Cookware & Serveware </Link> </li>
                     <li> <Link to="listing/listing.html"> Fruits & Vegetables </Link> </li>
                    <li> <Link to="listing/listing.html"> Kitchen Appliances </Link> </li>


                     </div>
                    </div>
                    </header>
        )
    }
     ///api calling 
     componentDidMount(){
      fetch(url,{
          method: 'GET',
          headers:{
              'x-access-token':sessionStorage.getItem('ltk')
          }
      })
      .then((res) => res.json())
      .then((data) => {
          this.setState({
              userData:data
          })
      })
  }
}

export default Header