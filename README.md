# Sobre o projeto

Esta API foi desenvolvida durante a etapa de teste técnico para uma vaga Back-End, onde o intuito foi criar uma API para marcar o horário de entrada e saída de funcionários (ponto).

# Tecnologias utilizadas
## Back end
- [TypeScript](https://www.typescriptlang.org/)
- [Nest](https://github.com/nestjs/nest)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io/)

## Implantação
- [Docker](https://www.docker.com/)
- [Postgresql](https://www.postgresql.org/)

# Como executar o projeto
Tanto a API como o banco de dados estão dentro de container. Para isso, basta utilizar o docker compose para criar as iso's e subir a API.
```bash
# clonar repositório
git clone https://github.com/rafamattia2/api-brainny.git

# entrar na pasta do projeto back end
cd brainny-crud

# executar o projeto
docker compose up --build
#ou
docker compose build
docker compose up
```

# Autor

Rafael de mattia

https://www.linkedin.com/in/rafamattia2

