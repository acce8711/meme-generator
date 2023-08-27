import React from 'react';
import Header from './Header.jsx';
import Meme from './Meme.jsx';

export default function Container()
{
    return(
        <div className="container">
            <Header />
            <Meme />
        </div>
    )
}