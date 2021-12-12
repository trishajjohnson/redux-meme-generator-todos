import React from 'react';
import NewMemeForm from './NewMemeForm';
import Meme from './Meme';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const memes = useSelector(store => store.memes);
  const dispatch = useDispatch();
  
  function addMeme(formData) {
    console.log("inside app function addMeme", formData)
    dispatch({ type: 'ADD', meme: formData });
  }
  
  function deleteMeme(id) {
    
    dispatch({ type: 'DELETE', id: id });
  }
  
  const memeCards = memes.map(meme => (
    <Meme meme={meme} deleteMeme={deleteMeme} />
  ));


  return (
    <div className="App">
      <NewMemeForm addMeme={addMeme} deleteMeme={deleteMeme}/>
      {memeCards}
    </div>
  );
}

export default App;
