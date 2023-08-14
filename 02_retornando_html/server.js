const express = require('express')
// console.log(express)
// console.log('HOLA!')
const app = express()
const port = 3345

const path = require('path')

//configurar um diretório
const basePath = path.join(__dirname, 'templates')//o nome do diretorio que o arquivo tá/diretrório globasl do projeto

app.get('/',(req,res)=>{
    // res.send('Olá mundo')
    res.sendFile(`${basePath}/index.html`)//irá retornar o arquivo
    //enviar arquivo
})
app.listen(port,()=>{
    console.log('Server on ' +port)
    console.log(basePath)
})
// rota contato
// const contato = path.join(__dirname, )
app.get('/contatos',(req,res)=>{
    res.sendFile(`${basePath}/contato.html`)
})