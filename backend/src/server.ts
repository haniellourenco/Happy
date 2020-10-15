import express, { response } from 'express'

import './database/connection';

const app = express()

app.use(express.json());
//rota = conjnto
//recurso = usuario

//metodos http = GET, POST, PUT, DELETE
//parametros

//GET = buscar uma informação (lista, item)
//POST = criando uma informação
//PUT = editando uma informação
//DELETE = deletar uma informação

//query params: http://localhost:3333/users?search=diego
//route params: http://localhost:3333/users/1 (identificar um recurso)
//body: http://localhost:3333/users 

// app.get('/users/:id', (request, response) => {
//     console.log(request.query);
//     console.log(request.params);
//     console.log(request.body);
// });

app.get('users', (request, response) => {
    return response.json({message: 'Hello World'})
});


app.listen(3333);

//driver natino, query builder, ORM