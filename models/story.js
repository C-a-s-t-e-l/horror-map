const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    fullStory:{ 
        type: String,
        required: true
    },
    locationName: {
        type: String,
        required: true,
        trim: true
    },
    latitude: { 
        type: Number,
        required: true
    },
    longitude: { 
        type: Number,
        required: true
    },
    snippet: {
        type: String,
        trim: true
    }
    
}, { timestamps: true }); 

const Story = mongoose.model('Story', storySchema); 
module.exports = Story; 