<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Before use

1. Create or launch **MongoDB** database using **Docker**
2. Clone repository with microservices to your app **https://github.com/Ksarelto/node-graphql-service.git**
3. Checkout to branch master
4. Follow guide in **README.md** file (in this repository) to instal dependencies and run microservices
5. Run microservices using guide

## How to run NestJs app:

1. Clone repository to your computer **https://github.com/Ksarelto/node-graphql-service.git**

2. Checkout to branch **develop**

3. Install dependencies

```
 npm install
```

4. Set **PORT** variable in **.env** file or use default **5000** **PORT**

5. Run app

```
# development
 npm run start

# watch mode
 npm run start:dev

# production mode
 npm run start:prod
```

## How to use

- This application is build with **GraphQl** and **NestJs**. **GraphQL** is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. **NestJs** is a progressive Node.js framework for building efficient, reliable and scalable server-side applications. So it is an reliable, efficient application with apportunity to filter data from microservices.

- For testing the abilities of the application you can use **GraphQl playground**,
- This playground is available on **http://localhost:3000/graphql**.
- There you can type queries or mutation and see what microservices return.
- If you don`t know how to use **GraphQL playground** you can use that link [GraphQl playground](https://blog.logrocket.com/complete-guide-to-graphql-playground/) as a guide.

### Available quires:

- artist
- artists
- genre
- genres
- track
- tracks
- band
- bands
- album
- albums
- jwt
- user
- favourites (available only for logged in user)

### Available mutations:

- Artists
  - createArtist
  - deleteArtist
  - updateArtist
- Genres
  - createGenre
  - deleteGenre
  - updateGenre
- Bands
  - createBand
  - deleteBand
  - updateBand
- Tracks
  - createTrack
  - deleteTrack
  - updateTrack
- Albums
  - createAlbum
  - deleteAlbum
  - updateAlbum
- Users
  - register
- Favourites
  - addTrackToFavourites
  - addBandToFavourites
  - addArtistToFavourites
  - addGenreToFavourites

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
