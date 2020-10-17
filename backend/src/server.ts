import express, { response } from 'express'
import path from 'path'
import cors from 'cors'

import 'express-async-errors'

import './database/connection';

import routes from './routes'
import errorHandler from './errors/handler'

const app = express()

app.use(cors())
app.use(express.json());
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
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




app.listen(3333);

//driver natino, query builder, ORM