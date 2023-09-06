import {Sequelize}  from 'sequelize'

const db = new Sequelize('crud_konecta', 'root', '1064836758', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql' 
});

export default db
