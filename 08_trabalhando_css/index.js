const express = require('express') 
const app = express()
const port = 5000

const path = require('path')
const basePath = path.join(__dirname,'templates')

//milddleware - meio de campo,ele faz as tratativas -ANTES DA ROTA OU NA RORA

//arquivos estaticos - CSS, IMG, VIDEOS, JS
//para usar-lo
app.use(express.static('public'))



app.get('/',(req,res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port,()=>{
    console.log(`Servidor on ${port} 👻`)
})

