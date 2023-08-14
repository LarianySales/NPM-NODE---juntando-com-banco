const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
// pode tbm ser escrita dessa forma
const app = express()// - importa info do obj express
console.log(app)
// para investigar o que tem no módulo
//node serve js para aparecer no console.
const port = 3445 // - a porta que o servidor vai rodar

// é necessária a rota(caminho), a requisição e a resposta(a req e a res fazem parte de uma função)
app.get('/',(req,res)=>{ //tá chamando o metodo
    //a requisição está diretamente ligada com o caminho
  res.send('Hola personas!')
})

//get -- / cliente -> console = Página cliente
app.get('/clientes',(req,res)=>{
    res.send('Página cliente')
})
//de busca| o express junto com o http

app.listen(port,()=>{
    console.log(`Servidor on na porta ${port}🥸`)
})
//npm i tbm instala as dependências que o arquivo json fala ser necessários
