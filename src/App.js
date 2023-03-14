import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import './index.css'

import Movies from './components/Movies';
import film from '..//src/data.json'
import Idk from '..//src//components/Idk'
import TextField from '@mui/material/TextField';




function App() {

  

 
  




  return (

    <div className="App">

            <Header>
              
            </Header>
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
          <Idk></Idk>

          <form noValidate autoComplete='off'>
          <TextField>
            
          </TextField>
          </form> 

             <div className="main">
            {
            film.map((review,index)=>{
            return(
            <Movies
            key={index}
             Title ={review.Title} 
            Year = {review.Year}  
            img ={review.Poster}
            />
            )
            })
          }
        </div> */

    </div>
  );
}

export default App;
