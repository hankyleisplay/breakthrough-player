const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Path to the release folder for AI project
const releasesPath = path.join(__dirname, '..', 'release');

// Serve files from the release folder
app.use('/releases', express.static(releasesPath));

app.get('/', (req, res) => {
    res.send('AI Player+ Update Server is Running. Place latest.yml and setup.exe in /release');
});

app.listen(PORT, () => {
    console.log(`AI Update Server listening on http://localhost:${PORT}`);
    console.log(`Serving files from: ${releasesPath}`);
});
