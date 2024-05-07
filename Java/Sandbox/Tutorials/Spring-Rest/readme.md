# Spring - [Building REST services with spring](https://spring.io/guides/tutorials/rest)

## Tech stack

- Built with Spring Boot and Initializr
- Deps: Web, JPA, H2

## Running

- Make sure Java 22 is installed locally
- run `./mvnw spring-boot:run` or `mvn clean spring-boot:run`

## examples
`curl -v localhost:8080/employees`

`curl -v localhost:8080/employees/99`

`curl -X POST localhost:8080/employees -H 'Content-type:application/json' -d '{"name": "Samwise Gamgee", "role": "gardener"}'`

`curl -X PUT localhost:8080/employees/3 -H 'Content-type:application/json' -d '{"name": "Samwise Gamgee", "role": "ring bearer"}'`

`curl -X DELETE localhost:8080/employees/3`

```
From the doc: 
"This statement of Roy Fielding’s may further lend a clue to the difference between REST and RPC:
'I am getting frustrated by the number of people calling any HTTP-based interface a REST API. Today’s example is the SocialSite REST API. That is RPC. It screams RPC. There is so much coupling on display that it should be given an X rating.

What needs to be done to make the REST architectural style clear on the notion that hypertext is a constraint? In other words, if the engine of application state (and hence the API) is not being driven by hypertext, then it cannot be RESTful and cannot be a REST API. Period. Is there some broken manual somewhere that needs to be fixed?'"
```

[REST APIs must be hypertext driven](https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven)

