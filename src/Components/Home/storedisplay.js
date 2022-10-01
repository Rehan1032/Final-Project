import React from 'react';
import {Link} from 'react-router-dom';

const StoreDisplay = (props) => {

    const myMeal = ({MyData}) => {
        if(MyData){
            return MyData.map((item) => {
                return(

                    <Link to={`/listing/${item.subcategory_id}`} key={item._id}>

             
                    <div class="card">
                          <img src={item.image} alt="img" border="0"/>
                                </div>
                   </Link>
                )
            })
        }
    }

    return(
        <>
            {myMeal(props)}
        </>
    )
}

export default StoreDisplay;