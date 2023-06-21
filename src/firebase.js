import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA3oF5YLiIw8DomqYVEDThTQGvsEixXOw4",
    authDomain: "app-egg-12b4a.firebaseapp.com",
    projectId: "app-egg-12b4a",
    storageBucket: "app-egg-12b4a.appspot.com",
    messagingSenderId: "1030906944688",
    appId: "1:1030906944688:web:df3499056227caf957af75",
    measurementId: "G-SKXS4W44V8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
}
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };