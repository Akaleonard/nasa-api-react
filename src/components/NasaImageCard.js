const NasaImageCard = ({ title, explanation, url }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{explanation}</p>
            <img src={url} alt=""/>
        </div>
    )
}

export default NasaImageCard;