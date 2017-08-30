This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# rama `r02-deploy`
El objetivo de esta rama de deployar la rama actual (puede ser master u otra rama) a https://github.io. El resto de ramas debe tener como base esta rama como mínimo.

## Configurar y deployar en el ambiente remoto github.io

En `package.json`, se agregó el key `homepage` y las siguientes líneas a  `devDependencies` y `scripts` :

```diff
    {
      "name": "ecomm-client",
      "version": "0.1.0",
      "private": true,
+     "homepage": "https://lp2-20172.github.io/ecomm-client",
      "dependencies": {
        "react": "^15.6.1",
        "react-dom": "^15.6.1"
      },
      "devDependencies": {
+       "gh-pages": "^1.0.0",
        "react-scripts": "1.0.12"
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject",
+       "predeploy": "npm run build",
+       "deploy": "gh-pages -d build"
      }
    }     
```
Mayor información ver  [GitHub pages](https://pages.github.com)

Para traer esta parte, 1 clonar :
```sh
>git clone https://github.com/lp2-20172/ecomm-client.git
>cd ecomm-client
ecomm-client>
```

o, si nuestro repo local está desactualizado, traer como:
```sh
D:\LP2-20172\ecomm-client>git pull origin r02-deploy
From https://github.com/lp2-20172/ecomm-client
 * branch            r02-deploy -> FETCH_HEAD
Updating 3022e84..b823874
Fast-forward
 README.md | 49 ++++++++++++++++++++++++++++++++++++++++++++-----
 n file changed, n insertions(+), n deletions(-)

D:\LP2-20172\ecomm-client>
```

o, traer todas las ramas del remoto:
```sh
D:\LP2-20172\ecomm-client>git pull --all

```

2 moverse o cambiar de rama (branch): `$ git checkout << nombre-rama >>`
```sh
D:\dev\LP2-20172\ecomm-client>git checkout r02-deploy
Switched to a new branch 'r02-deploy'
Branch r02-deploy set up to track remote branch r02-deploy from origin.

D:\dev\LP2-20172\ecomm-client>
D:\dev\LP2-20172\ecomm-client>git branch -a
  master
* r02-deploy
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
```

Para moverse a otra rama descartando los cambios de la rama actual:
```sh
D:\dev\LP2-20172\ecom-client>git checkout - f master
```

3 instalar dependencias:
```sh
ecomm-client>npm install

```

## Run deploy:

```sh
D:\dev\LP2-20172\ecomm-client>npm run deploy

> ecomm-client@0.1.0 predeploy D:\dev\LP2-20172\ecomm-client
> npm run build


> ecomm-client@0.1.0 build D:\dev\LP2-20172\ecomm-client
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  48.14 KB  build\static\js\main.9f185c84.js
  288 B     build\static\css\main.cacbacc7.css

The project was built assuming it is hosted at /ecomm-client/.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
To publish it at https://lp2-20172.github.io/ecomm-client, run:

  yarn run deploy


> ecomm-client@0.1.0 deploy D:\dev\LP2-20172\ecomm-client
> gh-pages -d build

Published

D:\dev\LP2-20172\ecomm-client>


```


No es necesario traer la rama `gh-pages` que se creó en el repositorio remoto al hacer deploy, vea:

```sh
D:\dev\LP2-20172\ecomm-client>git branch -a
  master
* r02-deploy
  remotes/origin/HEAD -> origin/master
  remotes/origin/master

```

### `Importante`: 
1. Tampoco es necesario subir la rama `gh-pages` (`git push origin gh-pages`), al hacer deploy ya lo hizo. Repito, no lo traiga, no es necesario.
2. Si ha realizado cambios en el código fuente y quiere mirar los cambios en el https://lp2-20172.github.io/ecomm-client debe vaciar la cache del browser o volver a cargar de manera forzada. 

Para `chrome` click derecho sobre el ícono de `Refresh` > click sobre `Vaciar caché y volver a cargar de manera forzada`

## Para renombrar una rama en el repositorio remoto

1ro renombrar en el local:
```sh
D:\dev\LP2-20172\ecomm-client>git branch -m r01-deploy r02-deploy

D:\dev\LP2-20172\ecomm-client>git branch
  master
* r02-deploy
```
2do ahora en el remmoto
```sh
D:\dev\LP2-20172\ecomm-client>git push -u origin :r01-deploy r02-deploy
Total 0 (delta 0), reused 0 (delta 0)
To https://github.com/lp2-20172/ecomm-client.git
 - [deleted]         r01-deploy
 * [new branch]      r02-deploy -> r02-deploy
Branch r02-deploy set up to track remote branch r02-deploy from origin.

D:\dev\LP2-20172\ecomm-client>git branch -a
  master
* r02-deploy
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/r02-deploy

D:\dev\LP2-20172\ecomm-client>
```



