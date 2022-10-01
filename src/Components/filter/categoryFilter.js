import React,{Component} from "react";
import axios from "axios";

const url = "https://node-api321.herokuapp.com/filter"
class CategoryFilter extends Component{

   filterCategory = (event) => {
       let categoryId = this.props.categoryId;
       let subcategoryId = event.target.value;
       let subcategoryUrl;
       if(subcategoryId === ""){
           subcategoryUrl = `${url}/${categoryId}`
       }else{
           subcategoryUrl = `${url}/${categoryId}?subcategory=${subcategoryId}`
       }
       axios.get(subcategoryUrl).then((res) => {this.props.restPerCategory(res.data)})
   }

   render(){
    
       return(
           <>
               <center>Category Filter</center>
               <div style={{marginLeft:'11%' ,marginRight:'36%'}} >
                   <label className="radio">
                       <input type="radio" name="cuisine" value="" onChange={this.filterCategory}/>All
                   </label>
                   <label className="radio">
                       <input type="radio" name="cuisine" value="1" onChange={this.filterCategory}/>Dmart Grocery
                   </label>
                   <label className="radio">
                       <input type="radio" name="cuisine" value="2" onChange={this.filterCategory}/>Dairy & Beverages
                   </label>
                   <label className="radio">
                       <input type="radio" name="cuisine" value="3" onChange={this.filterCategory}/>Home & Kitchen
                   </label>
                   <label className="radio">
                       <input type="radio" name="cuisine" value="4" onChange={this.filterCategory}/>Packaged Food
                   </label>
                   
               </div>
           </>
       )
   }
}

export default CategoryFilter