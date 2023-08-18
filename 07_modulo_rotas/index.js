const express = require('express')
const app = express()
const port = 3355

const path = require('path')
const basePath = path.join(__dirname, 'templates')



//middlewares para json
app.use(express.urlencoded({
     extended:true
}))
app.use(express.json())

//importar minhas rotas
const users = require('./users')
//usa a rota                      // ESSE USERS TEM QUE SER DEPOIS DO MIDDLEWARES DE TRABALHAR COM JSON 
app.use('/users',users)

app.get('/',(request,response)=>{
    response.sendFile(`${basePath}/index.html`)
})

app.listen(port,()=>{
    console.log(`Servidor on ${port} 🐼`)
})