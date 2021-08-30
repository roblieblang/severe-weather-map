const LocationInfoBox = ({ info }) => {
    return (
        <div className="loaction-info">
            <h2>Weather Event </h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>Title: <strong>{ info.title }</strong></li>
                {/*<li>Date: <strong>{ info.date }</strong></li>
                <li>Coordinates: <strong>{ info.title }</strong></li> */}
            </ul>
        </div>
    )
}

export default LocationInfoBox
