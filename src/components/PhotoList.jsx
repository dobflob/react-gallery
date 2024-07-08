import React from "react";
import Photo from "./Photo";
import NoResults from "./NoResults";

const PhotoList = () => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo></Photo>
                <NoResults></NoResults>
            </ul>
        </div>
        
    )
};

export default PhotoList;