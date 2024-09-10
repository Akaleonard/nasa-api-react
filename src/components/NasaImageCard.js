const NasaImageCard = ({ title, explanation, url, handlePreviousDay, handleNextDay }) => {
    return (
        <div className="nasa-card">
            <h1>{title}</h1>
            <p>{explanation}</p>
            <img src={url} alt={title}/>

            <div className="navigation-arrows">
                <button onClick={handlePreviousDay}>← Previous</button>
                <button onClick={handleNextDay}>Next →</button>
            </div>
        </div>
    )
}

export default NasaImageCard;