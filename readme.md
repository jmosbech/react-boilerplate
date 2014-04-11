# react-boilerplate
This repo contains the skeleton for a web app built with React, Node.js, Express, Browserify, and Sass.

[![Dependency Status](https://david-dm.org/jmosbech/react-boilerplate.svg)](https://david-dm.org/jmosbech/react-boilerplate)

## Install

1) Fetch from GitHub into cwd:
```
curl -L https://github.com/jmosbech/react-boilerplate/tarball/master | tar zx --strip-components=1
```

2) Install dependencies:
```
npm install
```

3) Start hacking

## Usage

### Start
Starting the app is easy, but remember to build the bundles first (see below):

```
node .
```

### Build
To build CSS and JavaScript bundles before deploying to production:

```
npm run build
```

### Watch
To automatically rebuild CSS and JavaScript bundles while developing, start the app using:

```
npm run watch
```

## Structure
The repo is organized like this:
- `app.js`: Main file. Starts the server.
- `/bin`: Various build scripts.
- `/browser`: All browser code: Sass and JSX files.
- `/public`: Publicly available static assets: build output and images.
- `/routes`: Express route definitions.
- `/test`: Mocha specs.
- `/views`: Server side views. Written with [PEJS](https://github.com/gett/pejs).

## License
MIT
