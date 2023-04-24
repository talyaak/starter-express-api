"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
require('dotenv').config();
const connectionString = process.env.API_URL;
exports.pool = new pg_1.Pool({
    connectionString: connectionString,
});
exports.pool.on('connect', () => {
    console.log('Connected to the database');
});
exports.pool.on('error', (err) => {
    console.error('Error occurred in the database', err);
    exports.pool.end();
});
