import {model,Schema} from 'mongoose';

const urlSchema = new Schema({
    originalURL:{
        type: String,
        required: true,
        
    },
    shortID:{
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        
    }
})

const urlModel=model('URL',urlSchema);

export default urlModel;