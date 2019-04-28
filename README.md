# The SADL system

[![Netlify Status](https://api.netlify.com/api/v1/badges/f22725ad-50b0-48dc-9281-e1b88c77e1d0/deploy-status)](https://app.netlify.com/sites/frosty-lumiere-397dea/deploys)

> Components and sites that comprise the SADL online presence

Viewable at [sadl.io](https://sadl.io).

## Develop

Install packages using `yarn`:

```sh
yarn
```

Continuously build everything with the `start` script:

```sh
yarn start
```

Continuously build individual packages with workspace `start` scripts. (For a nicer output than you get above, try each of these within a split in your terminal):

```sh
yarn workspace @sadl/components start
yarn workspace @sadl/site-components start
yarn workspace @sadl/site-sadl.io start
```

Automatically format supported files with the `format` script:

```sh
yarn format
```

Lint supported files with the `lint` script:

```sh
yarn lint
```

> Changed/staged files will automatically linted and formatted before a `git commit` will run.

## Build

This project is built to static. It can be deployed to almost any web server.

Build with the `build` script:

```sh
yarn build
```

This will output a static site in `/public`.

## Deploy

This project is automatically deployed to Netlify.
