// import React,{Component} from "react";
// import './dropdown.css'

// const Url = "https://rehan1032.github.io/2nd-Project-Data/"

// class Dropdown extends Component{
    

//     constructor(){
//         super()

//         this.state={
//             category:''
//         }
//     }
    
//     renderCategory=(data)=>{
//         if(data){
//         return data.map((item)=>{
//             return(
//                 <option value={item.id} key={item.id}>{item.category}</option>
//             )
//         })
//     }
//     }

//     render(){
//         return(
//                <>

// <div className="dropdown">
//   <select  id="categories" onChange="getProduct()">
//       <option>------ Category------</option>
//       {this.renderCategory(this.state.category)}
      
//   </select>
//   <select id="restSelect">
//       <option>------Product------</option>
//   </select>
// </div>

//                </>
//         )
//     }

//     //api calling on page load 
//     componentDidMount(){
//         fetch(Url,{method:'GET'})
//         .then((res)=>res.json())
//         .then((data)=>{
//             this.setState({category:data})
//         })
//     }
// }

//     export default Dropdown