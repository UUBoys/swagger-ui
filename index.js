const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJSDoc = require('swagger-jsdoc');
const express = require('express');

const app = express();
// swagger definition
var swaggerDefinition = require('./swagger.json')
// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./routes/*.js'],// pass all in array, here I am collecting all my routes in a folder and getting them all
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`)
})