require('dotenv').config();
const express = require('express');


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the horror map server! The server is running.');
});

app.post('/api/stories', async (req, res) => {
    console.log("Received data for new story (database is disabled):", req.body);
    
    const { title, fullStory, locationName, lat, lng } = req.body;
    if (!title || !fullStory || !locationName || lat === undefined || lng === undefined) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    res.status(201).json({
        message: 'Story submission received! (Database is temporarily disabled)',
        story: req.body 
    });
});


app.get('/api/stories', async (req, res) => {
    console.log("Fetching stories... (database is disabled, returning empty array)");
    try {
        const stories = []; 
        res.status(200).json(stories);
    } catch(error) {
        console.error('An unexpected error occurred:', error);
        res.status(500).json({ message: 'An error occurred on the server.' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});