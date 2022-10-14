##  :page_with_curl: Store Manager
Neste projeto foi desenvolvido uma API RESTful, utilizando a arquitetura MSC (model-service-controller)

A API é um sistema de gerenciamento de vendas que é possível criar, visualizar, deletar e atualizar produtos e vendas, foi utilizado o banco de dados MySQL para a gestão de dados.

E também foi implementado testes unitários.

## Instalação
<details>
  <summary><strong>:whale: Com Docker</strong></summary><br />

### 1 - Clone o repositório
```bash
git clone git@github.com:Bissixp/store-manager.git
```
### 2 - Mude para pasta do repositório
```bash
cd store-manager
```
### 3 - Rode o contêiner na pasta raiz da aplicação
```bash
docker-compose up -d
```
### 4 - Abra o terminal do container
```bash
docker exec -it store_manager bash
```
### 5 - Instale as dependências no terminal do container
```bash
npm install
```
### 6 - Rode o servidor no terminal do container
```bash
npm start
```
### 7 - Faça requisições para o servidor aberto na porta 3000
Recomendo utilizar a extensão Thunder Client no VS Code para fazer as requisições

 </details>
 <details>
  <summary><strong>:computer: Sem Docker</strong></summary><br />
 

  ### 1 - Clone o repositório
```bash
git clone git@github.com:Bissixp/store-manager.git
```
  ### 2 - Mude para pasta do repositório
```bash
cd store-manager
```
  ### 3 - Instale as dependências
```bash
npm install
```
  ### 4 - Rode o servidor
```bash
npm start
```
### 5 - Faça requisições para o servidor aberto na porta 3000
Recomendo utilizar a extensão Thunder Client no VS Code para fazer as requisições

</details>

 <details>
 <summary><strong>:computer: Populando o Banco de dados</strong></summary><br />
Conecte ao servidor MySQL rodando na porta 3306 usando o cliente MySQL e utilize as seguintes credenciais:

* host: `db`
* user: `root`
* password: `password`

execute os scripts que estão nos arquivos migration.sql e seed.sql no workbench.
 </details>


## 📋 Tecnologias utilizadas

- JavaScript
- Node.js
- Express.js
- MySQL
- Joi
- Docker
- Mocha
- Chai
- Sinon
