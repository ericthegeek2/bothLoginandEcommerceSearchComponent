import React from 'react'
import {products} from "../utils/Products";

import "../App.css";

const ProductComponent = (props) => {
  return (
    <div>
     {products.filter((obj) =>(obj.category.toLowerCase().includes(props.searchCategory.toLowerCase()))).filter((obj) =>(obj.name.toLowerCase().includes(props.searchproduct.toLowerCase()))).map((obj) =>(
     <div className='card' key={obj.id}>
     <h3>{obj.name}</h3>
     <h4>{obj.category}</h4>
     <h5>{obj.price}</h5>
     </div>
     ))}
    </div>
  )
}



export default ProductComponent
