# API de Controle Financeiro

Este projeto é uma API desenvolvida em TypeScript, utilizando Express, MySQL e Docker para facilitar o controle financeiro pessoal.

## Estrutura do Projeto
- **TypeScript** para desenvolvimento da API
- **Express** como framework web
- **MySQL** como banco de dados relacional
- **Docker** e **docker-compose** para orquestração dos containers

## Como rodar o projeto

1. **Clone o repositório** (se necessário)
2. **Configure as variáveis de ambiente** (exemplo no arquivo `.env.example`)
3. **Execute o comando abaixo para subir os containers:**

```sh
docker-compose up --build
```

4. A API estará disponível em `http://localhost:3000` e o banco MySQL em `localhost:3306`.

## Scripts úteis
- `docker-compose up --build` — Sobe a aplicação e o banco de dados
- `docker-compose down` — Para e remove os containers

## Observações
- O acesso ao banco de dados pode ser feito via qualquer cliente MySQL usando as credenciais do arquivo `.env`.
- O projeto está pronto para ser executado apenas via Docker, facilitando o uso em qualquer ambiente.

src/
├── core/                         # O "Coração" do sistema (Domínio)
│   ├── entities/                 # Classes de negócio (User, Account, Invoice)
│   ├── use-cases/                # Ações do sistema (CreateTransaction, MonthlyClosing)
│   └── ports/                    # Interfaces (Contratos para Repositórios e Serviços)
├── infrastructure/               # Implementações técnicas (Adapters)
│   ├── adapters/
│   │   ├── db/                   # Prisma, TypeORM ou SQL puro
│   │   └── web/                  # Fastify ou Express (Controllers)
│   └── config/                   # Variáveis de ambiente e DI (Injeção de Dependência)
└── main.ts                       # Entry point (Bootstrap)

---

Para dúvidas ou sugestões, fique à vontade para abrir uma issue ou contribuir!
