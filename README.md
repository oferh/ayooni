# Ayooni

A sails + angular + bootsrap template with testing for each

The template includes these components:

1. Sails.js
2. Angular
3. Bootsrap
4. Mocha for testing sails
5. Karma + Jasmine for testing angular
6. Protractor for e2e tests

## Installation

* Prerequisits:
  1. sails
  2. grunt & grunt cli
  3. bower
  4. to use selenium with protractor you will need to have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed


* clone the the project 
```
git clone 
```

* Install npm packages
```
cd ayooni
npm install
```

* Get selenium web driver
```
./node_modules/protractor/bin/webdriver-manager update
```

## Folder structure

    .
    ├── api
    │   ├── controllers - sails controllers
    │   ├── models
    │   │   └── fixtures - fixtures to load when initializing the app
    │   ├── policies
    │   ├── responses
    │   └── services
    ├── assets
    │   ├── images
    │   ├── js
    │   │   ├── dependencies - js 3rd party libs that aren't avilable in bower
    │   │   └── scripts - angular app
    │   ├── partials - angular html partials
    │   ├── styles 
    │   ├── templates
    ├── config
    │   ├── env
    │   └── locales
    ├── tasks
    │   ├── config
    │   └── register
    ├── test
    │   ├── angular
    │   │   ├── controllers - karam angular controllers tests
    │   │   └── filters - karam angular filters tests
    │   ├── e2e - protractor e2e tests
    │   ├── fixtures - fixtures for tests
    │   └── sails
    │       └── models - mocha tests for sails models
    │       └── controllers - mocha tests for sails controllers
    ├── views


## Running tests

### Unit tests

To run mocha and karma tests use:

```
grunt test
```

For testing mocha only `grunt test-sails:sails`
For testing karma only `grunt test-sails:angular`

### E2E tests

To run protractor tests 

```
grunt test-e2e
```