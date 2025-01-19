import express, { NextFunction, Request, Response } from "express";
import { PORT } from "./environments/env";
import authRoutes from "./modules/auth/routes"
import routesUser from "./modules/userss/routes";
import db from "./config/dbORM";

import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from './environments/env';
import { initModels } from "./model/init-models";
import swaggerDocument from './utils/swagger';
import swaggerUi from 'swagger-ui-express';


const app = express();



app.use(express.json())
//Uso de middleware 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

console.log(DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER)
const prefix: string = "/api";

app.use(`${prefix}/auth`, authRoutes);
app.use(`${prefix}/users`, routesUser);

const port: number = Number(PORT);
app.listen(port, () => {
  console.log("El servidor esta levantado en el puerto:", port);

});


async function main() {
  try {
    await db.authenticate();
    //Con este metodo inicializamos todo los modelos PERO RECUERDA ue es mejor hacerlo con init 
    initModels(db);
    await db.sync({ force: false });
    //Se actualice los modelos de forma brusca 
    console.log('Connection has been established successfully.');
    console.log(DB_PORT, DB_USER, DB_NAME, DB_PASS)
  } catch (error) {

    console.error('Unable to connect to the database:', error);
  }

}
main();


//hacemos la conexion 
/*
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

*/
