// Get the client
import mysql from 'mysql2/promise';

// Create the connection to database

console.log('Creating connection pool...')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
})

// const connection = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'test',
// });


export default pool;
