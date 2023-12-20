# coderstore-almeida

Loja online onde se pode comprar bibliotecas de código, linguages e frameworks como se fossem itens de mercado.

Projeto criado para o curso ReactJs da Coderhouse, turma 50920. O projeto utiliza o NextJS v14 como framework React e tailwind CSS para estilização, framer-motion para animações básicas, zustand com immer para gerenciamento de estado, Auth.js para autenticação, e o SDK do firebase-admin para acesso ao firebase/firestore e storage pelo lado do servidor.

Versão em produção: https://coderstore.iugmali.com

## Setup do Projeto

Copie o arquivo .env.example para .env

```bash
cp .env.example .env
```

### Firebase

Crie um novo projeto no firebase, e obtenha o json com as credenciais do projeto em settings > Service Accounts > Generate new private key. Popule o arquivo .env com o projectId, clientEmail e privateKey obtidos no arquivo gerado.
Ative a Firestore Database e o Storage, ambos começando em modo de produção.


### Auth.js
Rode o comando
```bash
openssl rand -base64 32
```
E popule a variável AUTH_SECRET com a string gerada.


Se o arquivo .env já estiver preenchido corretamente, rode o comando para popular o firestore e storage.
```bash
npm run seed
```

## Rodando a aplicação

Rodando o servidor de desenvolvimento:
```bash
npm run dev
```
Rodando o servidor em produção:
```bash
npm run build
npm start
```
Rodando a aplicação em docker
```bash
docker-compose up -d
```
