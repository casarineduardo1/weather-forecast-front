# weather-forecast
Projeto permite consultar dados da api openweather e armazenar as cidades consultadas em banco Sql Server através de uma api em C#.

Arquitetura
O projeto foi dividido em features, com o objetivo de de isolar cada "tipo" de código em seu devido lugar ex:
Componentes, serviços etc. Realizando a injeção dos mesmos conforme tornar-se necessário.


Requirementos
SQL Server Express
EntityFrameworkCore 3.0.1
.NET Core 3.0.1
Angular CLI: 8.3.19
Node: 12.13.1

Configurações
Backend
Este aplicativo usa um banco de dados SQL Server, para criar as tabelas necessárias, execute as seguintes etapas:
Crie um banco de dados no Sql Server
Atualizar cadeia de conexão appsettings.Development.json (ConnectionStrings)
Após configurado o banco rodar o backend, para criar a tabela

Frontend
Configurar url do backend nos enviroments.ts
Rodar o comando npm install

Rodar aplicação
backend
Abra o backend e execute o mesmo
Frontend
Entre na pasta do projeto
cd .\hbsis\
Execute comando
ng serve --open
