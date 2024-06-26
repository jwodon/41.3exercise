require('dotenv').config();

const app = require('./app');
const db = require('./db'); // Ensure db is connected before the server starts

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`listening on ${port}`);
});
