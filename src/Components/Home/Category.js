import React,{Component} from "react";
import './store.css'
import CategoryDisplay from "./CategoryDisplay";

const url = "https://node-api321.herokuapp.com/grocery"

class Category extends Component{
  
    constructor(){
      super()

      this.state={
        mealType:""
      }
    }

    render(){
     
        return(
      
          <>
          <div className="Headtext">
          Your Daily Staples

        </div>

     
     <CategoryDisplay mealData={this.state.mealType}/>
    
     
      
          </>
          
               
        )
    }
   
  // 
  componentDidMount(){
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        this.setState({mealType:data})
    })
}

}
  


export default Category