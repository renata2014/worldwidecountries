import React from 'react';
import './Homepage.css';
import  RegionCard  from "../components/RegionCard";



export class Homepage extends React.Component{
    render(){
        return(
            <div>
            <div class="picture">
        <div class="container">
            <h1>Worldwide Countries</h1>
        </div>
    </div>
            <RegionCard />
    </div>

           
        )
    }
}