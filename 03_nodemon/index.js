const express = require('express')
const app = express()
const port = 3446

app.get('/',(req,res)=>{
    res.send('Olá personas que leen libros')
})
app.listen(port,()=>{
    console.log(`Rondando na porta ${port} 🎶`)
})
//no pakage coloca o nodemon no lugar de node pra n parar