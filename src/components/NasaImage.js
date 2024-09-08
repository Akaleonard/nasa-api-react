import { useEffect, useState } from 'react';
import axios from 'axios';
import NasaImageCard from './NasaImageCard';

const NasaImage = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await axios.get(
                    'https://api.nasa.gov/planetary/apod?api_key=wk6dcmIbz8SaAQ4dPaLreTSsVdZABA93O7QSgImy'
                )

                setData(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])
    return (
        <>
            {loading && <p>Loading...</p>}
            <NasaImageCard
                title={data.title}
                explanation={data.explanation}
                url={data.url}
            />
        </>
    )
}

export default NasaImage;