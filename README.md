<div align="center">
  <h1>
    People Management - HR
  </h1>
  <span>
    a simple people management (HR) system created in Vanilla JS and front-end automation (gulp)
  </span>
  <br />
  <br />
  <br />
  <img src="./screenshot.png" />
</div>

## Tecnologies

- gulp -> front-end automation
- gulp-babel -> transpile
- gulp-concat -> to generate bundle.js file
- gulp-sass -> convert scss file to css file

## Install the dependencies

```
npm i
```

## Run back-end API

```
npm run api
```

## Run in development mode

before running this command, run an API first.
If you run the frontend first, you need to check the API url to change it in the file `js/main/_constants.js` currently being configured to call the api on port 3001

```
npm start
```

## Generate production build

```
npm run build
```
