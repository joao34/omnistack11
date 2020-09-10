const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const connection = require('./database/connection');

const routes = express.Router();

/**
 * Métodos HTTP:
 * 
 * GET: Buscar info backend
 * POST: Criar uma info no backend
 * PUT: Alterar info no backend
 * DELETE: Apagar info no backend
 */

 /**
  * Tipos de Parametros:
  * 
  * Query params: Parametros enviatos na rota depois do "?" (FIltros, Paginação)
  * Route Params: Parametros utilizador para identificar recursos
  * Request body: corpo do request, utilizado para criar ou alterar recursos
 */

routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);


routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;