# Desafio Fullstack - Aposta ganha (BACKEND)
<p> <br/><p>

## Tecnologias aplicadas
[![node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)
[![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](#)
[![jwt](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink)](#)
<p> <br/><p>

## 📝 Descrição

Essa aplicação criar usuário, atentica usuário, cria apostas, e lista apostas.

## ⚡️ Iniciando o Projeto

### Clonando Projeto
```bash
git clone https://github.com/allankenny/apostaganha-backend.git
```

### Requisitos

* [Node](https://nodejs.org/en/)

### Instalando Dependências  
* Utilizando NPM 
```bash
npm i
```

### Iniciando Projeto  
* Utilizando NPM 
```bash
npm run dev
```

## Endpoints
### Criar usuários
* Desenvolvimento : http://localhost:3333/user
* Produção: https://apostaganha-backend.herokuapp.com/user
* POST
```bash
  json:
  {
    "email": "exemple@gmail.com",
	  "password": "123456",
	  "firstName": "Exemple",
	  "lastName": "Exemple",
  }
```
<p> <br/><p>

### Login
* Desenvolvimento : http://localhost:3333/authenticate
* Produção: https://apostaganha-backend.herokuapp.com/authenticate
* POST
```bash
  json:
  {
    "email": "exemple@gmail.com",
	  "password": "123456",
  }
```
  #### Obs: Importante nesse passo após a logar um novo usuário pegar o token e _id para criar alguma aposta para esse usuário

<p> <br/><p>

### Criar aposta
* Desenvolvimento : http://localhost:3333/bets
* Produção: https://apostaganha-backend.herokuapp.com/bets
* POST
* Headers: Authorization: Bearer "token"
```bash
  json:
  {
    "userId": "6371bf8eb45bdd2a7fbdd763",
    "time1": "Brasil",
    "time2": "Argentina",
    "betQuote": "3.96",
    "amount": "200.00"
  }
```  

<p> <br/><p>

### Listar apostas de um usuário
* Desenvolvimento : http://localhost:3333/bets/:userId (exemplo: http://localhost:3333/bets/6371bf8eb45bdd2a7fbdd763)
* Produção: https://apostaganha-backend.herokuapp.com/bets/:userId
* GET
* Headers: Authorization: Bearer "token"


### Listar usuário (Rota publica apenas para facilitar os teste)
* Desenvolvimento : http://localhost:3333/users
* Produção: https://apostaganha-backend.herokuapp.com/bets/users
* GET

<p> <br/><p>
<p> <br/><p>

## Lista de usuários cadastrados para teste
* email: joao@email.com password: 123456
* email: jose@email.com password: 123456
* email: maria@email.com password: 123456
* email: rute@email.com password: 123456
  




