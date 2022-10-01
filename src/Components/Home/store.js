import React,{Component} from "react";
import './store.css'
import Header from '../../Header'
import StoreDisplay from "./storedisplay";

const url = "https://node-api321.herokuapp.com/snacks"

class Store extends Component{
  
    constructor(){
      super()

      this.state={
        Store:""
      }
    }

    render(){
      <Header/>
        return(
      
          <>
          <div class="Headtext">
         
          Snacks  & Kitchen Appliances

        </div>

    
     <StoreDisplay MyData={this.state.Store}/>
    
     
      
          </>
          
               
        )
    }
   
  // 
  componentDidMount(){
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        this.setState({Store:data})
    })
}

}
  
export default Store