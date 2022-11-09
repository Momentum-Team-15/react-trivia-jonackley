import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [categories, setCategories] = useState ([])

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then(response => setCategories(response.data.trivia_categories))
  }, [])
    
  return (
    <div className='App'>
      <header className='header'><h2>Trivialities</h2></header>
        {categories.map((topic) => (
        
          <div className='cat-container'>
            
              <button onClick={topic.name}> <h4>{topic.name}</h4></button>
             
           
          </div>
          
          
          ))}
    
    </div>
  )

}

export default App;
