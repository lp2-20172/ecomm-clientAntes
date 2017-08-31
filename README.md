This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# rama `r06-axios`
El objetivo de esta rama es trabajar con redux, axios y redux-thunk
se tomó como base del branch la rama `r05-redux`

## Configurar

En `package.json`, se agregó dos librerías en dependencies :

```diff
{
  "name": "ecomm-client",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://lp2-20172.github.io/ecomm-client",
  "dependencies": {
+   "axios": "^0.16.2",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-redux": "^5.0.6",
    "react-router": "^4.2.0",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
+   "redux-thunk": "^2.2.0"
  },
  "devDependencies": {
    "gh-pages": "^1.0.0",
    "react-scripts": "1.0.12"
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
   
```


moverse o cambiar de rama (branch):
```sh
D:\dev\LP2-20172\ecomm-client>git checkout r06-axios

```


Instalar dependencias:
```sh
D:\dev\LP2-20172\ecomm-client>npm install

```


Run:
```sh
D:\dev\LP2-20172\ecomm-client>npm start

```

## Run deploy (optional):

```sh
D:\dev\LP2-20172\ecomm-client>npm run deploy
....

Published

D:\dev\LP2-20172\ecomm-client>


```




