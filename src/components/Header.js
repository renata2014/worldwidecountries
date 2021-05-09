import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

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
                    
                    <ul>
                        <Link to="/">
                        <li className="current">Home</li>
                        </Link>
                        <Link to="/searchpage">
                        <li>Search</li>
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
