import React from 'react';
import './RegionCard.css';

export default class RegionCard extends React.Component{
    
    render(){
        return(
            <div class="card">
        <div class="card-header animated-bg" id="header">
            &nbsp;
        </div>

        <div class="card-content">
            <h3 class="card-title animated-bg animated-bg-text" id="title">&nbsp;</h3>
            <p class="card-excerpt" id="excerpt">
                &nbsp;
                <span class="animated-bg animated-bg-text">&nbsp;</span>
                <span class="animated-bg animated-bg-text">&nbsp;</span>
                <span class="animated-bg animated-bg-text">&nbsp;</span>
            </p>
            <div class="author">
                <div class="profile-img animated-bg" id="profile_img">
                    &nbsp;
                </div>
                <div class="author-info">
                    <strong class="animated-bg animated-bg-text" id="name">&nbsp;</strong>
                    <small class="animated-bg animated-bg-text" id="date">&nbsp;</small>
                </div>
            </div>
        </div>


    </div>
        )
    }
}