This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# rama `r03-react`
El objetivo de esta rama es de hacer un binding de los datos en dos direcciones

## Configurar y deployar en el ambiente remoto github.io

En `package.json`, se mantiene igual :

```diff
    {
      "name": "ecomm-client",
      "version": "0.1.0",
      "private": true,
      "homepage": "https://lp2-20172.github.io/ecomm-client",
      "dependencies": {
        "react": "^15.6.1",
        "react-dom": "^15.6.1"
      },
      "devDependencies": {
        "gh-pages": "^1.0.0",
        "react-scripts": "1.0.12"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
    }     
```
Por si su repo local esta desactualizado, traer todas las ramas del remoto:
```sh
D:\LP2-20172\ecomm-client>git pull --all

```

moverse o cambiar de rama (branch): `$ git checkout <<nombre-rama>>`
```sh
D:\dev\LP2-20172\ecomm-client>git checkout r03-react

```


Sin nuevas dependencias:
```sh


```

## Run deploy:

```sh
D:\dev\LP2-20172\ecomm-client>npm run deploy
....

Published

D:\dev\LP2-20172\ecomm-client>


```




