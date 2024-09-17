const routes = require("express").Router();
const artigoController = require("./src/controllers/artigoControllers")

routes.get("/artigos", artigoController.getAll);
routes.get('/artigos/:id', artigoController.getOne);
routes.put('/artigos/:id', artigoController.editar);
routes.delete('/artigos/:id', artigoController.delete);
routes.post('/artigos', artigoController.create);

module.exports = routes;