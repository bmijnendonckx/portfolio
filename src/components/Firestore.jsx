import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAu5qiqgDy8_ahyPqiRx4fWXMEkdV5Nq0o",
    authDomain: "portfolio-6fbde.firebaseapp.com",
    databaseURL: "https://portfolio-6fbde.firebaseio.com",
    projectId: "portfolio-6fbde",
    storageBucket: "portfolio-6fbde.appspot.com",
    messagingSenderId: "979387437475"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };