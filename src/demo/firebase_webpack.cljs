(ns ^:figwheel-hooks demo.firebase-webpack
  (:require
    ["@firebase/app"  :as firebase]
    ["@firebase/auth" :as auth]
    [reagent.dom     :as r.dom]))


(defn app []
  [:h1.site__title
    [:span.site__title-text "demo.firebase"]])


(defn mount []
  (r.dom/render [app] (js/document.getElementById "root")))


(defn ^:after-load re-render []
  (mount))


(goog-define firebase-api-key "AIzaSyB-imAo26zTQr0e3yDefHX32fu-O_sS1Dw")

(goog-define firebase-auth-domain "cljs-firebase-48930.firebaseapp.com")

(goog-define firebase-project-id "cljs-firebase-48930")

(goog-define firebase-storage-bucket "cljs-firebase-48930.appspot.com")

(goog-define firebase-messaging-sender-id "764996571280")

(goog-define firebase-app-id "1:764996571280:web:0677a2707acf7e565cc815")

(goog-define firebase-app-measurement-id "G-30KWZ7XC4X")

(goog-define firebase-use-auth-emulator false)


(def firebase-config
  #js {:apiKey            firebase-api-key
       :appId             firebase-app-id
       :authDomain        firebase-auth-domain
       :messagingSenderId firebase-messaging-sender-id
       :projectId         firebase-project-id
       :storageBucket     firebase-storage-bucket})


(defonce start-up
  (do

    (let [app      (js-invoke firebase "initializeApp" firebase-config)
          app-auth (js-invoke auth "getAuth" app)]

      (mount)

      true)))
