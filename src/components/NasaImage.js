import { useState } from 'react';
import useNasaAPI from '../hooks/useNasaAPI';
import NasaImageCard from './NasaImageCard';

const NasaImage = () => {
    const [date, setDate] = useState('');
    const [submittedDate, setSubmittedDate] = useState('');
    const { data, loading } = useNasaAPI(submittedDate);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedDate(date);
        setDate('');
    } 

    const handlePreviousDay = () => {
        const newDate = new Date(submittedDate || new Date().toISOString().split('T')[0]);
        newDate.setDate(newDate.getDate() - 1);
        setSubmittedDate(newDate.toISOString().split('T')[0]);
    }

    const handleNextDay = () => {
        const newDate = new Date(submittedDate || new Date().toISOString().split('T')[0]);
        newDate.setDate(newDate.getDate() + 1);
        const today = new Date().toISOString().split('T')[0];
        if (newDate.toISOString().split('T')[0] <= today) {
            setSubmittedDate(newDate.toISOString().split('T')[0]);  
        }
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
                        handlePreviousDay={handlePreviousDay}
                        handleNextDay={handleNextDay}
                    />
                </>
            )}
        </>
    )
}

export default NasaImage;