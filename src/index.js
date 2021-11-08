// https://github.com/clojure/clojurescript/blob/514274cab1d1798a1754758502e6fee2ab32103a/src/main/clojure/cljs/closure.clj#L1745
import { npmDeps } from './deps.js'

const config = {
  apiKey:            "AIzaSyB-imAo26zTQr0e3yDefHX32fu-O_sS1Dw",
  appId:             "1:764996571280:web:0677a2707acf7e565cc815",
  authDomain:        "cljs-firebase-48930.firebaseapp.com",
  messagingSenderId: "764996571280",
  projectId:         "cljs-firebase-48930",
  storageBucket:     "cljs-firebase-48930.appspot.com"
}


const auth = npmDeps["@firebase/app"].initializeApp(config)
const app = npmDeps["@firebase/auth"].getAuth(auth);

console.log(auth)
console.log(app)


