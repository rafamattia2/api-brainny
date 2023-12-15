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

## Para testar as requests:
- [Insomnia](https://insomnia.rest/)

# Como executar o projeto
Tanto a API como o banco de dados estão dentro de um container. Para isso, basta utilizar o docker compose para criar as iso's e subir a API.
Para testar as requests da API, basta importar no Insomnia o arquivo "insomnia-api-brainny".

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
Neste [LINK](https://www.youtube.com/watch?v=HY97vXn4uVQ) eu explico como foi o processo de desenvolvimento desta API.
# Autor

Rafael de Mattia

https://www.linkedin.com/in/rafamattia2

