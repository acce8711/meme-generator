import React from 'react';
import {useEffect, useState} from "react";
import catMeme from "../images/cat-meme.jpg"


//let url = memeData;
export default function Meme()
{
    //const [meme, setMeme] = React.useState("");
    const [meme, setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: catMeme
        }
    )
    
    
    const [allMemes, setAllMemes] = React.useState([]);
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(memes => setAllMemes(memes.data.memes))
    }, [])


    function getMemeImage()
    {
        const randomNum = Math.floor(allMemes.length * Math.random())
        setMeme(prevMeme => ({...prevMeme, randomImage:allMemes[randomNum].url}))
    }
    
    function handleChange(event)
    {
        const {value, name} = event.target
        setMeme(prevMeme => ({
            ...prevMeme, [name] : value
        }))
    }
    
    return(
        <main>
            <div className="form margin">
                <div className="text-input">
                    <label for="top-text">Top text</label>
                    <input
                     type="text" 
                     id="top-text"
                     value={meme.topText}
                     name="topText"
                     onChange={handleChange}
                     />
                </div>
                <div className="text-input">
                    <label for="bottom-text">Bottom text</label>
                    <input 
                     type="text" 
                     id="bottom-text"
                     value={meme.bottomText}
                     name="bottomText"
                     onChange={handleChange}
                     />
                </div>
                <button className="button" onClick={getMemeImage}> GENERATE </button>
            </div>
            <div className="meme">
                <img className="meme-image" src={meme.randomImage}/>
                <p className="top-text meme-text">{meme.topText}</p>
                <p className="bottom-text meme-text">{meme.bottomText}</p>
            </div>
        </main>
    )
}