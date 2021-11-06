(ns ^:figwheel-hooks demo.firebase-webpack
  (:require
    [reagent.dom :as r.dom]))


(defn app []
  [:h1.site__title
    [:span.site__title-text "demo.firebase"]])


(defn mount []
  (r.dom/render [app] (js/document.getElementById "root")))


(defn ^:after-load re-render []
  (mount))


(defonce start-up (do (mount) true))
