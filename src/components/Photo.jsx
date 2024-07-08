import React from "react";

const Photo = ({secret, id, server, title}) => {
    return (
        <li>
            <img src={`https://live.staticflickr.com/${server}/${id}_${secret}_q.jpg
`} alt={`${title}`} />
        </li>
    )
};

export default Photo;