import animation from '../assets/earth.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={animation} alt="Loading Application" />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader
