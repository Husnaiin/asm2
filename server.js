const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
app.use(cors());
app.use(express.json());

// a. GET request that returns Hello, {name}
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}`);
});

// b & c & d. POST request to handle profile data
app.post('/profile', (req, res) => {
    const profile = req.body;
    
    // c. Validate required fields
    const requiredFields = ['Name', 'Title', 'Targeted_Keywords', 'Education', 'Certification', 'Contact'];
    const missingFields = requiredFields.filter(field => !profile[field]);
    
    if (missingFields.length > 0) {
        return res.status(400).json({
            error: `Missing required fields: ${missingFields.join(', ')}`
        });
    }

    // d. Save/Append to JSON file
    try {
        let profiles = [];
        if (fs.existsSync('profiles.json')) {
            profiles = JSON.parse(fs.readFileSync('profiles.json'));
        }
        profiles.push(profile);
        fs.writeFileSync('profiles.json', JSON.stringify(profiles, null, 2));
        res.status(201).json({ message: 'Profile saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving profile' });
    }
});

// e. GET request to return profiles from CSV
app.get('/profiles', (req, res) => {
    const profiles = [];
    fs.createReadStream('profiles.csv')
        .pipe(csv())
        .on('data', (data) => profiles.push(data))
        .on('end', () => {
            res.json(profiles);
        })
        .on('error', (error) => {
            res.status(500).json({ error: 'Error reading profiles' });
        });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 