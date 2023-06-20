import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyA3oF5YLiIw8DomqYVEDThTQGvsEixXOw4',
    //authDomain: 'TU_DOMINIO_AUTH',
    projectId: 'app-egg-12b4a',
    //storageBucket: 'TU_BUCKET',
    //messagingSenderId: 'TU_SENDER_ID',
    appId: 'app-egg-12b4a'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
}
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };