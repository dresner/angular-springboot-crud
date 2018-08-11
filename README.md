Record Collection CRUD
==========================

Music record collection CRUD for learning purposes, with:

* TypeScript client with Angular 6
* Java server with Spring Boot 2.0.1
    * Persistence with MySQL


Running
-------

It assumes a MySQL process running with a 'records' database. Configuration instructions [here](https://spring.io/guides/gs/accessing-data-mysql/).

To run the server:
```
cd spring-server
mvn spring-boot:run
```

To run the client:
```
cd angular-client
ng serve --open
```
