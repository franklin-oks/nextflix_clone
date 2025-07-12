import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//codes down imported by me
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAs8TSl_iRqAdEMyCbQmXibjK2Ta3BpKfo",
  authDomain: "netflix-clone-f44a5.firebaseapp.com",
  projectId: "netflix-clone-f44a5",
  storageBucket: "netflix-clone-f44a5.firebasestorage.app",
  messagingSenderId: "918762471991",
  appId: "1:918762471991:web:05a4bee33646b39463b5b2",
  measurementId: "G-Q46K5514F2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//codes down was added by me
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
