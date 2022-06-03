//inicializando o express
var express = require('express');
//chamando o método express e atribuindo à variável app
var app = express();
//importando a rota alunos, que está na pasta ./router/aluno
var aluno = require('./router/aluno')


//usando o express.urlenconded() para ler as requisições que virão do front-end no modo FORM 
app.use(express.urlencoded())

//rota aluno, que está sendo importado com o require('./router/aluno')
app.use("/aluno", aluno);

//resposta padrão ao se conectar
app.get("/", (req, res) =>{
    res.send("Server rodando na porta 3000. Faça requisições GET via params ou query")
})




//porta na qual o server vai rodar
app.listen(3000, ()=> console.log('Server rodando...'))
