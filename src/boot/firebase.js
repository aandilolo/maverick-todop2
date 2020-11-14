import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

var firebaseConfig = {
    apiKey: "AIzaSyCstLbaOK03zkBKHZQ1FdfaVdKdBcb7EMk",
    authDomain: "maverick-bcedd.firebaseapp.com",
    databaseURL: "https://maverick-bcedd.firebaseio.com",
    projectId: "maverick-bcedd",
    storageBucket: "maverick-bcedd.appspot.com",
    messagingSenderId: "783981715660",
    appId: "1:783981715660:web:72c89f3963795d080a6269"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
