const express = require('express');
const routes = require('./routes');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "TODOAPI",
            version: "1.0.0",
            description: "Api criada para aprendizado e demonstração de uma simples api criada em javascript",
            contact: {
                name: "Guilherme Andrade Lacerda"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ['./routes.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use(routes);
app.listen(3333);