import React,{Component} from 'react';
import './listing.css';
import Header from '../../Header'
import ListingDisplay from './listingDisplay'
import axios from 'axios';
import CategoryFilter from '../filter/categoryFilter';
import FilterDisplay from '../filter/filterdisplay';

const url = "https://node-api321.herokuapp.com/Subcategory?subcategoryId="


class Listing extends Component{
    constructor(props){
        super(props)

        this.state={
            productList:''
        }
    }

   setDataPerFilter=(data)=>{
    this.setState({productList:data})
   }

    render(){
        
        return(
            
            <>
            <Header/>
            <div className='row'>
                <div id='mainlisting'>
                    <div id='filter'>
                        <center>
                            <h3>
                                Filter
                            </h3>
                        </center>
                        <CategoryFilter categoryId={this.props.match.params.categoryId}
                        restPerCategory={(data) => {this.setDataPerFilter(data)}}/>
                        
                        <hr/>
                        
                           <FilterDisplay mealId={this.props.match.params.mealId}
                           restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                    </div>
                    <ListingDisplay listData={this.state.productList}/>
                </div>
            </div>
                
            </>
        )
    }

    ///api calling with axios 
    componentDidMount(){
        let categoryId = this.props.match.params.categoryId;
        sessionStorage.setItem('categoryId',categoryId)
        axios.get(`${url}${categoryId}`)
        .then((res) => {this.setState({productList:res.data})})
    }

}

export default Listing