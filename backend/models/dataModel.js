import mongoose from 'mongoose';

const dataSchema = mongoose.Schema(
    {
        date: String,
        title: String,
        explanation: String,
        url: String
    }
)

const NasaData = mongoose.model('Data', dataSchema);

export default NasaData;