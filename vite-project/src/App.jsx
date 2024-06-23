import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginComponent from "./utils/Loginf";
import FilterComponent from "./components/filterComponent";
import ProductComponent from './components/productComponent';
import SearchMovieComponent from "./components/searchMovieComponent";
import FilterMovieComponent from "./components/filterMovieComponent";

function App() {
  

  const [itemValue,setItemValue] = useState('')

  const [checkValue, setCheckValue] = useState('')

  const [searchMovie, setSearchMovie] = useState('')

 
 
 const enable = (boolean)=>{
  setDisabled(boolean)
 }
  
  
  return (
    <>
    <br />
    <br />
    <h3>Login Assignment</h3>
    
    <LoginComponent />
     <hr/>
     <br />
     <br />
     <br />
     <h3>Ecommmerce assignment</h3>

     <FilterComponent searchitem={itemValue} setsearchitem={setItemValue} category={checkValue} setCategory={setCheckValue}/>
     <ProductComponent searchproduct={itemValue} searchCategory={checkValue}/>


     <br />
     <h3>My react practise</h3>
     <p>search movies</p>
     <SearchMovieComponent searchMovie={searchMovie} movie={setSearchMovie}/>
     <FilterMovieComponent movieSearch={searchMovie}/>
    </>



  
  )
}

export default App
