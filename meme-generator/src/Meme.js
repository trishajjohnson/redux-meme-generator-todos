import React from 'react';
import './Meme.css';

function Meme({meme, deleteMeme}) {
    
    function handleClick(evt) {
        deleteMeme(meme.id);
        console.log("Meme deleted!");
    }

    return (
        <div className="memeStyles">
            
            <img src={meme.imageLink} alt="" />
            <h3 className="h3Top" id="topText">{meme.topText}</h3>
            <h3 className="h3Bot" id="bottomText">{meme.bottomText}</h3>
            <button id={meme.id} onClick={handleClick}>Delete</button>

        </div>
    );
}

export default Meme;