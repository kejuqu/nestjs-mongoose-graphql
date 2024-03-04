# How to start?

##  method 1:
- Install [Docker Engine](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) as standalone binaries. or just install [Docker Desktop](https://docs.docker.com/desktop/)(includes both Docker Engine and Docker Compose)

```bash
# Running the app
docker compose up -d
```
## method 2:
- need to install mongodb & mongodb service is running
  [Install MongoDB Community Edition](https://www.mongodb.com/docs/manual/administration/install-community/)
- install node
  [Node install](https://nodejs.org/en)

```bash
# Running the app

pnpm install

# development
pnpm run start

# watch mode development
pnpm run dev

# production mode
pnpm run start:prod
```

## Graphql playground

```
http://localhost:8081/graphql

query {
  chats(productId: 123){
    id
    creatorId
    content
    createAt
  }
}

# mutation {
#   createChat(input: {
#     content:"test1"
#   }){
#     content
#   }
# }

```

## Technology stack

[Nest.js](https://docs.nestjs.com/graphql/quick-start#schema-first) + [mongoose](https://docs.nestjs.com/techniques/mongodb) + [graphql - schema first](https://docs.nestjs.com/graphql/quick-start)
