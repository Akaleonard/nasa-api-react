const NasaImageCard = ({ title, explanation, url }) => {
    return (
        <div className="nasa-card">
            <h1>{title}</h1>
            <p>{explanation}</p>
            <img src={url} alt={title}/>
        </div>
    )
}

export default NasaImageCard;