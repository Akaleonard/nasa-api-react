import { useState } from 'react';
import useNasaAPI from '../hooks/useNasaAPI';
import NasaImageCard from './NasaImageCard';

const NasaImage = () => {
    const [date, setDate] = useState('');
    const { data, loading } = useNasaAPI(date)

    const handleSubmit = (e) => {
        e.preventDefault();
    } 
    return (
        <>
            {loading && <p>Loading...</p>}

            {!loading && data && (
                <>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                        <button type="submit">Search</button>
                        </form>
                    <NasaImageCard
                        title={data.title}
                        explanation={data.explanation}
                        url={data.url}
                    />
                </>
            )}
        </>
    )
}

export default NasaImage;