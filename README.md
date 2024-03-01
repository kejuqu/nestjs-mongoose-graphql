# How to start?

- need to install mongodb & mongodb service is running
  [Install MongoDB Community Edition](https://www.mongodb.com/docs/manual/administration/install-community/)
- install node
  [Node install](https://nodejs.org/en)

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode development
$ pnpm run dev

# production mode
$ pnpm run start:prod
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

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Technology stack

[Nest.js](https://docs.nestjs.com/graphql/quick-start#schema-first) + [mongoose](https://docs.nestjs.com/techniques/mongodb) + [graphql - schema first](https://docs.nestjs.com/graphql/quick-start)
