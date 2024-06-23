import React from 'react'

const FilterComponent = (props) => {
  const handleChange = (event) =>{
    props.setsearchitem(event.target.value)
  }

  const handleCheck = (event) =>{
    if (event.target.checked) {
      console.log('hello')
      console.log(event.target.name)
      props.setCategory(event.target.name)
    }

    
  }


  return (
    <div>

      <p><input type="text" value={props.searchitem} onChange={handleChange}/></p>
      <p><input type="checkbox" value={props.category} name="Clothing" id="Clothing" onChange={handleCheck}/>Clothing</p>
      <p><input type="checkbox" value={props.category} name="shoes" id="shoes" onChange={handleCheck}/>shoes</p>
      <p><input type="checkbox" value={props.category} name="phones" id="phones" onChange={handleCheck}/>phones</p>
    </div>
  )
}

export default FilterComponent
