const express = require('express');
const mongoose = require('mongoose');

const app = express();;
const dbURI = "mongodb+srv://ezzyllena:Isee12angels@hmph.eixugrj.mongodb.net/?retryWrites=true&w=majority&appName=HMPH";

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

app.post('/api/stories', (req, res) => {
console.log('Received data:, req.body);');

res.json({
    message: "Data received successfully!",
    data: req.body
});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});