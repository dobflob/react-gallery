import NoResults from "./NoResults";
import Photo from "./Photo";

function PhotoList() {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo />
                <NoResults />
            </ul>
        </div>
    )
}

export default PhotoList;