import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoResults from "./NoResults";
import Photo from "./Photo";

const PhotoList = ({fetchData, topic}) => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {query} = useParams();

    useEffect( () => {
        let activeFetch = true;
        setIsLoading(true);

        const getPhotos = async () => {

            if (!topic) {
                topic = query;
            }
            setPhotos(await fetchData(topic));
            setIsLoading(false);
        }
        getPhotos();

        return () => activeFetch = false;
    }, [topic || query]);

    let photoDisplay = photos.map(photo => {
        return <Photo
            id={photo.id}
            secret={photo.secret}
            server={photo.server}
            title={photo.title}
            key={photo.id} />
        });

    return (
        <div className="photo-container">
            {
                (isLoading)
                ? <p className="loading">Loading...</p>
                : <>
                    <h2>{photos.length} Results for {topic? topic : query}</h2>
                    <ul>
                        {photoDisplay.length === 0 ? <NoResults /> : photoDisplay}
                    </ul>
                </>
            }

        </div>
    )
};

export default PhotoList;