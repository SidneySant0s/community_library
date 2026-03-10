# 📚 Community Library API
API RESTful para gerenciamento de usuários, livros e empréstimos em uma biblioteca comunitária.  
O sistema permite cadastro de usuários, autenticação via JWT, gerenciamento de livros e controle de empréstimos com envio de lembretes por e-mail.

---
## ⚙️ Instalação
Siga os passos abaixo para instalar e executar o projeto:


### Pré requesitos

- Node.js (v14 ou superior)
- npm (Node package Manager) ou yarn

1. Clone o repositório:

    ```bash
     git clone https://github.com/seu-usuario/community-library.git
     cd community-library
    ```
2. Acesse o diretório do projeto:

    ```bash
    cd community-library
    ```

3. Instale as dependências:

Com npm:

    ```bash
    npm install
    ```

    Com yarn:

    ```bash
     yarn install
    ```

4. Crie um arquivo .env' na raiz do projęto e adicione suas variáveis de ambiente.
Veja o exemplo abaixo:

    ```
    PORT=3000
    SECRET=your_jwt_secret
   ```
5. Gerando uma chave secreta de SHA256:

Você pode gerar uma chave secreta com SHA256 executando o seguinte comando no
terminal:

    ```bash
    node -e "console. log(require('crypto').randomBytes(32).toString('hex'))"
    ```

    Isso gerará uma chave secreta aleatória de 256 bits em formato hexadecimal.

6. Inicie o servidor:

Com npm:

    ```bash
    npm start
    ```
    Com yarn:

    ```bash
    yarn start
    ```
7. 0 servidor estará em execução em `http://
localhost : 3000'.

## Rotas

- ** /users **: Rotas para operações de usuários (criar,
listar, buscar por ID, atualizar, excluir).
- ** /books **: Rotas para operações de livros (criar,
listar, buscar por ID, atualizar, excluir).
- ** /loans **: Rotas para operações de empréstimos
(criar, listar, buscar por ID, excluir).

Endpoints principais
## 👤 Usuários
POST /users → Criar usuário

POST /users/login → Login

GET /users → Listar usuários (autenticado)

GET /users/:id → Buscar usuário por ID

PATCH /users/:id → Atualizar usuário

DELETE /users/:id → Deletar usuário

## 📚 Livros
POST /books → Criar livro (autenticado)

GET /books → Listar livros

GET /books/search?query=... → Buscar livros por título/autor

GET /books/:id → Buscar livro por ID

PATCH /books/:id → Atualizar livro

DELETE /books/:id → Deletar livro

## 📖 Empréstimos
POST /loans → Criar empréstimo

GET /loans → Listar empréstimos

GET /loans/:id → Buscar empréstimo por ID

DELETE /loans/:id → Deletar empréstimo

## 🚀 Tecnologias utilizadas
- **Node.js** + **Express**
- **SQLite3** (banco de dados)
- **Zod** (validação de dados)
- **JWT** (autenticação)
- **Bcrypt** (hash de senhas)
- **Nodemailer** (envio de e-mails)
- **Node-cron** + **Moment.js** (tarefas agendadas)

---

## 📂 Estrutura de pastas


## Contribuição

Se você gostou do projeto e deseja contribuir, fique à
vontade para abrir uma issue ou enviar um pull request.
Todas as contribuições são bem-vindas!

Obrigado por acessar o projeto e por considerar
contribuir para torná-lo ainda melhor!