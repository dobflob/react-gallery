import React, { useEffect, useState } from "react";
import NoResults from "./NoResults";
import Photo from "./Photo";

const PhotoList = ({query, fetchData, data}) => {

    useEffect(() => fetchData(query), [query]);
    
    let photos = data.map(photo => <Photo id={photo.id} secret={photo.secret} server={photo.server} title={photo.title} key={photo.id} />);

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos.length === 0 ? <NoResults /> : photos}
            </ul>
        </div>
    )
};

export default PhotoList;