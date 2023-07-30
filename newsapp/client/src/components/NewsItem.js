import React from "react"
import HtmlRenderer from '../HtmlRenderer';
import './newsItem.css'

const NewsItem = (props) => {
    function componentDidMount() {
        const newImage = new Image();
        newImage.src = props.image;
        window[props.image] = newImage;
        
    }
    componentDidMount();
    var replacementURL = "https://via.placeholder.com/400x200"
    return (
            
            <div className = "card">
                <div className="card-header">
                    <img src = {props.image} alt = {replacementURL}/>
                </div>
                <div className = "card-content">
                    <h3>
                        <a href = {props.url}>
                            {props.title}
                        </a>
                    </h3>
                    <h6 className="news-source" id="news-source">{props.source} {props.published_at}</h6>
                    <p id = "news-description">
                        <HtmlRenderer htmlString={props.description} />
                    </p>
                    <h1>Sentiment: {props.sentiment}</h1>
                </div>
                
            </div>
        
    )
}

export default NewsItem