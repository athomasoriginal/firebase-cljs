import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey:            "AIzaSyB-imAo26zTQr0e3yDefHX32fu-O_sS1Dw",
  appId:             "1:764996571280:web:0677a2707acf7e565cc815",
  authDomain:        "cljs-firebase-48930.firebaseapp.com",
  messagingSenderId: "764996571280",
  projectId:         "cljs-firebase-48930",
  storageBucket:     "cljs-firebase-48930.appspot.com"
}

const auth = initializeApp(config)
const app = getAuth(auth);

console.log(app);
