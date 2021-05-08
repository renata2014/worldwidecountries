import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import loupe from '../loupe.svg';

export class Header extends React.Component{    
    state = {
        inputValue: ""
    }
    updateInputValue = (event) => {
        this.setState({
            inputValue: event.target.value
          });

    }

    handleSearch = (event) => {
        this.updateInputValue(event);
        localStorage.setItem("searchName", this.state.inputValue)
    }

    render(){
        return(
            <div>

            <nav class="nav">
                <div class="container">
                    <h1 class="logo"><a href="/">Worldwide Countries</a></h1>
                    <div className="search ">
                    <input onKeyDown={this.handleSearch} onKeyUp={this.updateInputValue}  type="text" className="input" placeholder=" search..."/>
                    <Link to="/searchpage">
                    <button onClick={this.handleSearch} className="loupe-button"><img src={loupe} className="loupe" alt=""/></button>
                    </Link>
                </div> 
                    <ul>
                        <Link to="/">
                        <li className="current">Home</li>
                        </Link>
                        <Link to="/countries">
                        <li>Countries</li>
                        </Link>
                        <Link to="/about">
                        <li>About</li>
                        </Link>
                      
                    </ul>
              
                </div>
       
                
            </nav>
            
            </div>
        )
    }
}
