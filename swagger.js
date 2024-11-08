const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Konfigurasi Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User API',
            version: '1.0.0',
            description: 'A simple Express CRUD API with PostgreSQL and Sequelize',
        },
        servers: [{
            url: 'http://localhost:5000',
        }, ],
    },
    apis: ['./index.js'], // Menunjuk ke file yang berisi komentar Swagger
};

const specs = swaggerJsDoc(options);

module.exports = {
    swaggerUi,
    specs
};