import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from '../environments/env';




const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: Number(DB_PORT),

    dialect: 'postgres',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    define :{
        timestamps:true,
        updatedAt:true,
        createdAt:true,
        //Tiempo de espero
    },
    pool: {
        //tiempo de espera 
        max: 5,
        min: 0,
        idle: 10000
    }, 
    logging: console.log,
    
});


export default db;