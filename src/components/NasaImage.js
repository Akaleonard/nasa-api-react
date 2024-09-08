import { useEffect, useState } from 'react';
import axios from 'axios';

const NasaImage = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await axios.get(
                    'https://api.nasa.gov/planetary/apod?api_key=wk6dcmIbz8SaAQ4dPaLreTSsVdZABA93O7QSgImy'
                )

                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.explanation}</p>
            <img src={data.url} alt=""/>
        </div>
    )
}

export default NasaImage;