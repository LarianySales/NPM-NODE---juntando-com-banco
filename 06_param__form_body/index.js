const express = require('express')
const app = express()
const port = 3555
const path = require('path')
const basePath = path.join(__dirname,'templates')

//esse url vai codificar a url e montar um obj json
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

//rota para mostrar o formulario
app.get('/user/add',(req,res)=>{
    res.sendFile(`${basePath}/userForm.html`)
})

//rota para cadastrar as informações do formulario
app.post('/user/save',(req,res)=>{
// desetruturar o body para selecionar de uma a uma
//elas vão vim como obj.json que vamos desestruturar
const {name, age} = req.body

//forma tradicional,mas longa
    // const name = req.body
    // const age = req.body

    //irá dar erro pois não esta montado em obj para enviar ao back-end,um padrão mais simples como o json para ser recebido
    console.log(`Nome: ${name} e Idade: ${age}`)
    res.sendFile(`${basePath}/userForm.html`)

})
app.listen(port,()=>{
    console.log(`Servidor on ${port} 👻`)
})