import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { requestCats } from './requests.js'
import { Questions } from './components/CatQ'
import { Categories} from './components/CatList'


function App() {
  const [category, setCategory] = useState ([])
  const [singleCat, setSingleCat] = useState (null)
  const [questions, setQuestions] = useState ([])
  const [url, setUrl] = useState ()

  useEffect(() => {
    requestCats().then(response => setCategory(response.data.trivia_categories))
  }, [])
    
  useEffect(() => {
    axios.get(url).then(response => setQuestions(response.data.results))

}, [url])
    
  return (
    <div>
      <header className='header'><h2>Trivialities</h2></header>
        <h3>Click on a category to start your Quiz!</h3>
            <div className='cat-container'>           
              {singleCat ? (
                <Questions
                  singleCat={singleCat}
                  setSingleCat={setSingleCat}/> 
              ) : (
                <>
                  {category.map((topic) => (
                    <div className='cat-butt'>
                      <Categories
                        setSingleCat={setSingleCat}
                        category={category}
                        setUrl={setUrl}/>
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}  
    </div>
  )
}

export default App;

