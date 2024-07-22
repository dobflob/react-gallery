import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoResults from "./NoResults";
import Photo from "./Photo";

/**
 * Photo list component that fetches data, sets the photos state to hold the returned photos, sets a loading state, and uses url params as topic if user is fetching photos outside the defaults. Conditionally displays a loading message, a photo list, or a no results component depending on what is returned from the fetchData call.
 * @param {*} props.fetchData is the function passed from the parent to handle making the api request to flickr
 * @param {*} props.topic is the topic passed from the default routes (cats, dogs, pigs) and if it's missing, the search text (taken from the route param) is set to be the topic
 * @returns
 */
const PhotoList = ({fetchData, topic}) => {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {query} = useParams();

    useEffect( () => {
        let activeFetch = true;
        setIsLoading(true);

        /**
         * sets the topic variable to the query if topic is null
         * calls fetchData with topic param
         * sets the photos state once the data is returned from fetchData
         * sets loading to false once data is returned from fetchData
         */
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