
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Story = require('./models/story');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Hello from the horror map server!');
});

app.post('/api/stories', async (req, res) => {
    console.log("Received data for new story:", req.body);
    try {
        const { title, fullStory, locationName, lat, lng, snippet } = req.body;

        if (!title || !fullStory || !locationName || lat === undefined || lng === undefined) {
            return res.status(400).json({ message: "Missing required fields (title, fullStory, locationName, lat, lng)." });
        }

        const newStory = new Story({
            title: title,
            fullStory: fullStory,
            locationName: locationName,
            latitude: lat,
            longitude: lng,
            snippet: snippet || (fullStory ? fullStory.substring(0, 100) + (fullStory.length > 100 ? '...' : '') : '')
        });

        const savedStory = await newStory.save();
        res.status(201).json({
            message: 'Story created successfully!',
            story: savedStory
        });

    } catch (error) {
        console.error('Error saving story to database:', error);
        res.status(500).json({
            message: 'Failed to create story.',
            error: error.message
        });
    }
});

app.get('/api/stories', async (req, res) => {
 try {
    const stories = await Story.find({});
    console.log("Stories fetched:", stories.length);
    res.status(200).json(stories);

 } catch(error) {
    console.error('Error fetching stories:', error);
    res.status(500).json({ message: 'Failed to fetch stories.' });
 }
});

// 2. Use the environment variable from process.env
// The variable name must match the one in your .env file
const dbURI = process.env.MONGODB_URI;

// Check if the URI was loaded correctly
if (!dbURI) {
    console.error('Error: MONGODB_URI is not defined. Make sure you have a .env file with the variable.');
    process.exit(1); // Exit the application if the database URI is missing
}

mongoose.connect(dbURI)
    .then((result) => {
        console.log('Connected to MongoDB Atlas!');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });