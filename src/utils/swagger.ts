
import swaggerjsdoc, { Options } from 'swagger-jsdoc';

//Se importa este metodo 


//! configuracion de swagger

const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Users Api ',
            version: '1.0.0',
            description: 'Documentacion para probar swagger y su forma de definir funcionamiento de typescript ',
        },
    },
    apis: ['./src/modules/**/routes.ts'], // files containing annotations as above
};

const openapiSpecification = swaggerjsdoc(options);


export default openapiSpecification;