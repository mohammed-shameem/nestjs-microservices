# Nestjs Microservices sample boilerplate using RabbitMQ, GraphQL
## Running the Project

### Docker

Docker is cool 
You need to install Docker and docker-compose to run this application

1. Clone the repo.
2. `cd nestjs-microservices`
3. `docker-compose up -d`

That's it you can access the application at `localhost:4200/graphql`

### Making changes to Services

If you have done any changes to services, it will automatically get reflected, so you dont need to rebuild docker images.

## GraphQL

GraphQL is a query language for your API, you can read more about it here https://graphql.org/


An example query that can be executed in the playground at `http://localhost:4200/graphql` is

```
query {
  getUsers{
    id
    name
    role
    hourlyPrice
  }
}
```

##TODO

1. Connect to database
2. Create a frontend using angular
3. Create monorepo using https://github.com/nrwl/nx to share the code b/w frontend and backend and solves the pain of maintaining code at diff repos.