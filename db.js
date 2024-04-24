require('dotenv').config(); // Ensure this is at the top

const { Client } = require('pg');

// Setup the database connection using environment variables
const dbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
};

const db = new Client(dbConfig);

db.connect((err) => {
    if (err) {
        console.error('connection error', err.stack);
    } else {
        console.log('connected to db');
    }
});

module.exports = db;
