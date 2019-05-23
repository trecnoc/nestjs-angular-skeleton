# NestJS / Angular Skeleton
## Description

This is a demo skeleton app that shows a NestJS api that can also serve an Angular App.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
## server (watch)
$ npm run start:api:dev
## ui (watch)
$ npm run start:ui:dev

# production mode
## build and run
$ npm run start:prod
## run
$ npm start
```

## Test

While both angular and nestjs have extensive testing libraries, this app is
currently not setup to run tests, it could be in the future, should people
want to contribute.

## Further documentation

The NestJS app is located in the `/api` directory and the Angular app is located in the `/ui` directory. Each app has their own README.md.

Both apps share one package.json. All dependencies are marked as dev dependencies and the libraries required to run the build app are listed in bundle dependencies.

This project can be used as a reference or forked for new apps. I would recommend if starting from scratch with a nest app and an angular app that you look at how the package.json came together and how the tsconfig.json in each project changed and the angular.json.
