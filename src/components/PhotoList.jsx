import React from "react";
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import NoResults from "./NoResults";

const PhotoList = ({data}) => {


    /* const results = data.map(photo => <Photo id={photo.id} secret={photo.secret} server={photo.server} title={photo.title} key={photo.id}/>);

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {results.length === 0 ? <NoResults /> : results}
            </ul>
        </div>
    ) */
};

export default PhotoList;