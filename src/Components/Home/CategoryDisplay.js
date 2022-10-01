import React from 'react';
import {Link} from 'react-router-dom';

const CategoryDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(

                   <Link to={`/listing/${item.subcategory_id}`} key={item._id}>

             
                    <div className="card">
                          <img src={item.image} alt="rice" border="0"/>
                                </div>
                   </Link>
                )
            })
        }
    }

    return(
     
        <>
        
            {listMeal(props)}
        </>
    )
}

export default CategoryDisplay;