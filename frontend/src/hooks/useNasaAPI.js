import { useEffect, useState } from 'react';
import axios from 'axios';

const useNasaAPI = (date) => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {

            const url = date 
                    ? `https://api.nasa.gov/planetary/apod?api_key=wk6dcmIbz8SaAQ4dPaLreTSsVdZABA93O7QSgImy&date=${date}`
                    : `https://api.nasa.gov/planetary/apod?api_key=wk6dcmIbz8SaAQ4dPaLreTSsVdZABA93O7QSgImy`;

            try {
                const response = await axios.get(url);
                setData(response.data)             
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [date])

    return { data, loading }
}

export default useNasaAPI;