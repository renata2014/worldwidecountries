import React from 'react';
import './Homepage.css';
import  RegionCard  from "../components/RegionCard";

export class Homepage extends React.Component{

    render(){
        return(
            <div>
            <div class="picture">
        <div class="container">
            <h1>Welcome to the worldwide countries.</h1>
            <h2>Enjoy!</h2>
        </div>
    </div>
    <h3 className="region-title">Choose a region</h3>
           <div className="region-cards">
           
            <RegionCard 
                ImgURL={"https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
                CardTitle={"Europe"}
                CardText={"Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Europe covers about 10,180,000 km2 (3,930,000 sq mi), or 2% of the Earth's surface (6.8% of land area), making it the second smallest continent."}
                />
            

          
            <RegionCard 
            ImgURL={"https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"}
            CardTitle={"Americas"}
            CardText={"The Americas, which are also collectively called America, are a landmass comprising the totality of North and South America. The Americas make up most of the land in Earth's Western Hemisphere and comprise the New World."}
            />
            
            <RegionCard
            ImgURL={"https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80"}
            CardTitle={"Asia"}
            CardText={"Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa."} />
            
            <RegionCard
            ImgURL={"https://images.unsplash.com/photo-1516426122078-c23e76319801?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80"} 
            CardTitle={"Africa"}
            CardText={"Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.3 billion people as of 2018, it accounts for about 16% of the world's human population."}/>

            <RegionCard
            ImgURL={"https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"} 
            CardTitle={"Oceania"}
            CardText={"Oceania includes Australasia, Melanesia, Micronesia and Polynesia. Spanning the Eastern and Western Hemispheres, Oceania has a land area of 8.5 mil km2 and a population of over 41 million. The region of Oceania is the smallest in land area and the second smallest in population after Antarctica."} />

            </div>
    </div>

           
        )
    }
}