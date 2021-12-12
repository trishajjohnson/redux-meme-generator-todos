import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

function NewMemeForm({addMeme}) {
    const [formData, setFormData] = useState({
        imageLink: "",
        topText: "",
        bottomText: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log("inside handleSubmit");
        addMeme({...formData, id: uuid() });
        setFormData({
            imageLink: "",
            topText: "",
            bottomText: ""
        });
        console.log("Meme generated!");
    }

    return (
        <div className="NewMemeForm">
            <h1>Meme Generator</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="imageLink">Image Link</label>
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="imageLink"
                        value={formData.imageLink}
                        id="imageLink" 
                        placeholder="Enter image link here" 
                    />
                </div>
                
                <div>
                    <label htmlFor="topText">Top Text</label>
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="topText"
                        value={formData.topText}
                        id="topText" 
                        placeholder="Enter top meme text here" 
                    />
                </div>
                
                <div>
                    <label htmlFor="bottomText">Bottom Text</label>
                    <input 
                        onChange={handleChange}
                        type="text" 
                        name="bottomText"
                        value={formData.bottomText}
                        id="memeTextBot" 
                        placeholder="Enter bottom meme text here" 
                    />
                </div>
                              
                <button id="submitBtn">Create Meme</button>                 
            </form>
        </div>
    );
}

export default NewMemeForm;