import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export class Header extends React.Component{
    render(){
        return(
            <div>

            <nav class="nav">
                <div class="container">
                    <h1 class="logo"><a href="/index.html">Worldwide Countries</a></h1>
                    <ul>
                        <Link to="/">
                        <li className="current">Home</li>
                        </Link>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
              
                </div>
       
                <div className="search ">
                    <input type="text" classname="input"/>
                </div>  
            </nav>
            
            </div>
        )
    }
}