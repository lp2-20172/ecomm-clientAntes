This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# rama `r04-router`
El objetivo de esta rama es manejar los routers

## Configurar

En `package.json`, se adicionaron dependencias :

```diff
{
  "name": "ecomm-client",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://lp2-20172.github.io/ecomm-client",
  "dependencies": {
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
+   "react-router": "^3.0.5"
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
    }     
```

moverse o cambiar de rama (branch): `$ git checkout <<nombre-rama>>`
```sh
D:\dev\LP2-20172\ecomm-client>git checkout r04-router

```


Sin nuevas dependencias:
```sh
D:\dev\LP2-20172\ecomm-client>npm install


```

## Run deploy:

```sh
D:\dev\LP2-20172\ecomm-client>npm run deploy
....

Published

D:\dev\LP2-20172\ecomm-client>


```




