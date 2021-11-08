# firebase-webpack

This repo illustrates a problem I found when trying to use the `firebase` npm
package in CLJS.

When we require firebase in CLJS

```clojure
["@firebase/app" :as app]
["@firebase/auth" :as auth]
```

And then try to intialize the app

```clojure
(let [app      (js-invoke firebase "initializeApp" firebase-config)
      app-auth (js-invoke auth "getAuth" app)]
```

We get an error in the console:

```bash
Error: Component auth has not been registered yet
```

The `master` branch illustrates this scenario is CLJS and I have created another
branch called `firebase-method-4` which reproduces the issues in JS.


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
