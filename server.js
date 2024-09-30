const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', userRoutes); // Prefixing routes with '/api'

// Serve static files (like the form in public)
app.use(express.static('public'));

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
