import React from 'react';
import './About.css';


export class About extends React.Component{

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <div className="about-page">
                <h2>About this project</h2>
                <p>
            This is an amazing project made for an internship program. It's simple and easy to use website, where you cand explore and find information about any country from any region around the world.
            There are five regions and in which region you can find the countries that belongs to them. You can also acces those countries and find more details.
            There is a simple search bar in the Header section, but there is also a search filter to make it more interesting and easy for you. 
            Enjoy!</p>
            </div>

           
        )
    }
}