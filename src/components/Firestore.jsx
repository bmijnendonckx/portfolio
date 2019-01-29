import firebase from '@firebase/app';
import '@firebase/firestore'

const config = {
    apiKey: "AIzaSyAu5qiqgDy8_ahyPqiRx4fWXMEkdV5Nq0o",
    authDomain: "portfolio-6fbde.firebaseapp.com",
    databaseURL: "https://portfolio-6fbde.firebaseio.com",
    projectId: "portfolio-6fbde",
    storageBucket: "portfolio-6fbde.appspot.com",
    messagingSenderId: "979387437475"
}

firebase.initializeApp(config);

export default firebase;