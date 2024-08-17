# May Fest / Komaba Fest

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## IMPORTANT

Do NOT forget to delete temporary projects since they are not maintained
only inherit permanent projects.

## Dependencies

this website requires these to run:

Node.js
npm

## Installation

```sh
npm ci
```

## Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```sh
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

For mf97, this repo is automatically deployed after updating the main branch.

https://mf97.utcode.net/

## Reusing this repo

When reusing this repo, you need to edit ./docusaurus.config.js , ./static/\_redirects and ./src/pages/index.tsx .

Do NOT reuse the same remote repository, otherwise you will pollute previous generations.
Instead, make a new one by cloning && deleting .git && `git init`
