import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import loupe from '../loupe.svg';

export class Header extends React.Component{
    render(){
        return(
            <div>

            <nav class="nav">
                <div class="container">
                    <h1 class="logo"><a href="/">Worldwide Countries</a></h1>
                    <div className="search ">
                    <input type="text" className="input" placeholder=" search..."/>
                    <button className="loupe-button"><img src={loupe} className="loupe" alt=""/></button>

                </div> 
                    <ul>
                        <Link to="/">
                        <li className="current">Home</li>
                        </Link>
                        <Link to="/about">
                        <li>About</li>
                        </Link>
                        <Link to="/contact">
                        <li>Contact</li>
                        </Link>
                    </ul>
              
                </div>
       
                
            </nav>
            
            </div>
        )
    }
}