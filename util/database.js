// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient;

// let _db

// const mongoConnect = callback => {
//     MongoClient.connect('mongodb+srv://marrizzsalau7:001479@cluster0.kepxlcb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//     .then(client => {
//         console.log('Connected!');
//         _db = client.db()
//         callback();
//     })
//     .catch(err => {
//         console.log(err);
//         throw err;
//     });

// };

// const getDb = () => {
//     if (_db) {
//         return _db;
//     }
//     throw 'No database found!';
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;















































// // const Sequelize = require('sequelize');

// // const sequelize = new Sequelize('node-complete', 'root', '001479', {
// //     dialect: 'mysql', 
// //     host: 'localhost'
// // });

// // module.exports = sequelize;

// // // const mysql = require('mysql2');

// // // const pool = mysql.createPool({
// // //     host: 'localhost',
// // //     user: 'root',
// // //     database: 'node-complete',
// // //     password: '001479'
// // // });

// // // module.exports = pool.promise();