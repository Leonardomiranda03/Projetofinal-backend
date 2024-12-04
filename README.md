# Projetofinal-backend

**Alterações e Funcionalidades**
1. Organização da Estrutura
O projeto foi todo estruturado para seguir o padrão MVC, o que facilitou bastante a separação de responsabilidades e a manutenção do código. A estrutura ficou assim:

bookstore/
│
├── src/
│   ├── config/               # Configurações gerais do projeto
│   │   └── database.ts       # Configuração do Prisma para o PostgreSQL
│   ├── controllers/          # Lida com requisições e respostas
│   │   ├── authController.ts # Controlador de autenticação
│   │   └── bookController.ts # Controlador de livros
│   ├── helpers/              # Regras de validação e funções auxiliares
│   │   └── validationHelper.ts
│   ├── models/               # Modelos de dados do Prisma
│   │   ├── bookModel.ts
│   │   └── userModel.ts
│   ├── repositories/         # Operações diretas com o banco
│   │   ├── bookRepository.ts
│   │   └── userRepository.ts
│   ├── routes/               # Rotas da aplicação
│   │   ├── authRoutes.ts
│   │   └── bookRoutes.ts
│   └── server.ts             # Configuração principal do servidor
│
├── public/                   # Frontend básico para consumir a API
│   └── index.html
├── tests/                    # Testes unitários
├── package.json              # Configuração do projeto Node.js
├── tsconfig.json             # Configuração do TypeScript
├── jest.config.js            # Configuração dos testes
└── README.md                 # Documentação
2. Funcionalidades do Backend
Autenticação
Implementei duas rotas principais para gerenciar a autenticação de usuários:

POST /api/auth/register: Faz o registro de novos usuários.
POST /api/auth/login: Faz login e retorna um token JWT.
Para isso, usei bcrypt para hash das senhas e jsonwebtoken para autenticação. Foi uma parte que exigiu muita atenção para garantir segurança!

**Gerenciamento de Livros**
Criei rotas para lidar com livros:

GET /api/books: Retorna todos os livros cadastrados.
POST /api/books: Adiciona um novo livro (requer autenticação).
Além disso, fiz validações usando um helper, que me ajudou a garantir que os dados enviados estavam no formato correto.

**3. Frontend Simples**
Para facilitar a visualização dos resultados, fiz um frontend básico em HTML com JavaScript puro.

**Funcionalidades:**
Formulário de login.
Formulário para adicionar novos livros.
Lista dinâmica que mostra os livros cadastrados no banco.
Tudo isso interagindo com o backend usando a Fetch API.

**4. Testes**
Adicionei testes com Jest para verificar:

Validações do helper.
Funcionamento dos controladores de autenticação e livros.
Foi um pouco complicado no início, mas me ajudou muito a entender melhor como meu código se comporta.

**Dificuldades Encontradas**
Integração com o Prisma: No começo tive alguns problemas para configurar o Prisma, mas com a documentação oficial consegui resolver.

Autenticação JWT: Foi desafiador fazer com que o token funcionasse corretamente para proteger as rotas de livros, mas ficou funcional e seguro.

Frontend com Fetch API: Embora simples, criar as funções de consumo da API com feedback para o usuário deu um pouco de trabalho.

**Melhorias Futuras**
Fazer um frontend mais elaborado usando React ou Angular.
Adicionar funcionalidades como edição e remoção de livros.
Implementar paginação na listagem de livros.
Fazer deploy em um servidor online para facilitar os testes.
