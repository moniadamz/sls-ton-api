# SLS-TON-API

API Serverless que cria um usuário e conta o número de acessos ao site do [Ton](https://ton.com.br), utilizando serviços AWS e IaC.

Esse projeto teve o início baseado no template disponível em https://github.com/codingly-io/sls-base. 

## Tecnologias:

- NodeJS v12.18.4, DynamoDB, Serverless v2.41.2, Bcrypt v2.4.3

## Acesso:

| Rota | Verbo | Descrição |
| --- | --- | --- |
| GET | `https://3tsw7y6irl.execute-api.eu-west-1.amazonaws.com/dev/access` | Retorna o número de acessos ao endpoint |
| POST | `https://3tsw7y6irl.execute-api.eu-west-1.amazonaws.com/dev/access` | Incrementa em um acesso o número total |
| GET | `https://3tsw7y6irl.execute-api.eu-west-1.amazonaws.com/dev/users/:id` | Busca um usuário pelo Id |
| POST | `https://3tsw7y6irl.execute-api.eu-west-1.amazonaws.com/dev/users` | Cria um usuário |




## Como testar 

- ```npm run test```

## Exemplo de requisição

#### REQUEST

POST: [https://3tsw7y6irl.execute-api.eu-west-1.amazonaws.com/dev/users](https://3tsw7y6irl.execute-api.eu-west-1.amazonaws.com/dev/users)

Body:

| Campo         | Tipo  | Descrição  | Obrigatório |
| ------------- |-------------| ------------ |:---------: |
| name | String | de 3 à 50 caracteres | ✔ |
| password | String | de 6 à 16 caracteres | ✔ |
| login | String | de 1 à 10 caracteres | ✔ |


#### RESPONSE

``` 
{
    "id": "adaa0c47-cd2f-4160-8622-ac54184ec1e3",
    "name": "someUser",
    "login": "password123",
    "createdAt": "2021-05-19T21:03:40.447Z"
}
```
