# firebase-webpack

There are two branches.  Each branch uses a different bundling strategy:


## Require Method #1 - `:target :bundle`

- Checkout `master` branch
- Build JavaScript Deps
  ```bash
  yarn install
  ```
- Run App
  ```bash
  clj -M:dev
  ```
- Visit App
  http://localhost:9500

Note: we don't call webpack because fighweel will do this for us.

## Require Method #2 - `:foreign-libs`

- Checkout `firebase-method-2` branch
- Build JavaScript Deps
  ```bash
  yarn install
  ```
- Build foreign-lib
  ```bash
  yarn webpack
  ```
- Run App
  ```bash
  clj -M:dev
  ```
- Visit App
  http://localhost:9500


## Require Method #3 - `:target :bundle` (vanilla CLJS)


- Checkout `firebase-method-3` branch
- Build JavaScript Deps
  ```bash
  yarn install
  ```
- Run App
  ```bash
  clj -M -m cljs.main -co build.edn -v -c -r
  ```
- Visit App
  http://localhost:9500


## Require Method #4 - vanilla JS

- Checkout `firebase-method-4` branch
- Build JavaScript Deps
  ```bash
  yarn install
  ```
- Run App
  ```bash
  node server.js
  ```
- Browser should auto open to http://localhost:9000
