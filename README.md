# Capstone

This capstone project utilizes multiple APIs to help users predict the weather upon their arrival to a destination. Users must specify city and state or country, as well as their departure and arrival dates. The image on the screen will be updated with a destination image. If no image can be found for the city, a country image will be displayed instead. Installation instructsion are below.


## Sources:

https://medium.com/@drgenejones/proxying-an-external-api-with-webpack-serve-code-and-a-restful-data-from-separate-endpoints-4da9b8daf430

https://codepen.io/rebelchris/pen/gOaZBoo?editors=1111

https://zellwk.com/blog/endpoint-testing/

## APIs Utilitized:

https://restcountries.eu/
http://www.geonames.org/
https://pixabay.com/
https://www.weatherbit.io/

## Install:
```
npm install
npm i webpack webpack-cli 
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D clean-webpack-plugin
npm i -D style-loader node-sass css-loader sass-loader
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
npm install @babel/plugin-transform-runtime
npm install regenerator-runtime --save-dev
npm install supertest --save-dev
npm install babel-cli babel-preset-env jest supertest superagent
npm install workbox-webpack-plugin
npm i --save-dev jest-date-mock
```
