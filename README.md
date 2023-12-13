# coderstore-almeida

Projeto criado para o curso ReactJs da Coderhouse, turma 50920. O projeto utiliza o NextJS como framework React e tailwind CSS para estilização, framer-motion para animações básicas e o SDK do firebase para acesso ao firebase/firestore.

## Setup

Copie o arquivo .env.example para .env

```bash
cp .env.example .env
```
Crie um novo projeto no firebase e obtenha as credenciais para o sdk da web. Popule o arquivo .env com as credenciais.

Crie uma nova database firestore para popular as categorias e itens padrão.

Se os dados estiverem populados corretamente no arquivo .env e a database estiver iniciada, rode o comando para popular o firestore com categorias e itens.
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
