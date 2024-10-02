const express = require('express');
const app = express();
const port = 8080;

// Sample dictionary for demonstration purposes
const dictionary = {
    happy: 'खुसी',
    love: 'माया',
    friend: 'साथी',
    learn: 'सिक्नु',
    fun: 'मजेदार'
};

// Endpoint to handle the translation request
app.get('/translate', (req, res) => {
    const query = req.query.q;

    if (query) {
        const translation = dictionary[query.toLowerCase()] || 'Translation not found';
        res.send(`
            <html>
                <body>
                    <h1>Translation</h1>
                    <p>English: ${query}</p>
                    <p>Nepali: ${translation}</p>
                    <a href="/">Go Back</a>
                </body>
            </html>
        `);
    } else {
        res.send('Please provide a word to translate.');
    }
});

// Serve static HTML and CSS files (assuming they are in the "public" folder)
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
