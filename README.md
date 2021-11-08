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
I have also added `rollup` and `webpack` configs so it's easier to test different
scenarios.  The idea is:

- Allow figwheel to call them by updating `dev.cljs.edn`
  ```clojure
  ;; figwheel will bundle with rollup
  :bundle-cmd {:none ["yarn" "rollup" "-c" "rollup.config.js"]}

  ;; figwheel will bundle with webpack
  :bundle-cmd {:none ["yarn" "webpack"]}
  ```
- Run figwheel and manually run rollup or webpack
  - comment out `:bundle-cmd` or `:auto-bundle` in `dev.cljs.edn`
  - Run either webpack or rollup
    ```bash
    yarn webpack

    yarn rollup -c rollup.config.js
    ```

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
