const express = require('express');
const mongoose = require('mongoose');
const Story = require('./models/story');

const app = express();
const dbURI = "mongodb+srv://ezzyllena:Isee12angels@hmph.eixugrj.mongodb.net/horror_map_db?retryWrites=true&w=majority&appName=HMPH";

const PORT = 3000;

app.use(express.json());


mongoose.connect(dbURI)
    .then((result) => {
        console.log('Connected to MongoDB Atlas!');
       
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.get('/', (req, res)=> {
    res.send('Hello from the horror map server!');
});


app.post('/api/stories', async (req, res) => { 
    console.log("Received data for new story:", req.body);

    try {
        // Data from the request body (sent by Postman or your frontend)
        const { title, fullStory, locationName, lat, lng, snippet } = req.body;

        // Validate if required fields are present (basic validation)
        // Mongoose schema 'required: true' will also do validation, but good to check here too.
        if (!title || !fullStory || !locationName || lat === undefined || lng === undefined) {
            return res.status(400).json({ message: "Missing required fields (title, fullStory, locationName, lat, lng)." });
        }

        // Create a new Story document using your Mongoose model
        const newStory = new Story({
            title: title,
            fullStory: fullStory,
            locationName: locationName,
            latitude: lat,       // Map 'lat' from req.body to 'latitude' in schema
            longitude: lng,      // Map 'lng' from req.body to 'longitude' in schema
            snippet: snippet || (fullStory ? fullStory.substring(0, 100) + (fullStory.length > 100 ? '...' : '') : '') // Use provided snippet or generate one
            // Mongoose will add _id, createdAt, updatedAt automatically
        });

        // Save the new story to the database
        const savedStory = await newStory.save(); // 'await' pauses until save is done

        // Send a success response back to the client
        res.status(201).json({ // 201 Created status
            message: 'Story created successfully!',
            story: savedStory // Send the saved story (which now has _id, timestamps)
        });

    } catch (error) {
        
        console.error('Error saving story to database:', error);
        res.status(500).json({ // 500 Internal Server Error
            message: 'Failed to create story.',
            error: error.message 
        });
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});