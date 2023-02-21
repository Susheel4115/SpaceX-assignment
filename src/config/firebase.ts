import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

//initialize firebase app
export const Firebase = initializeApp(firebaseConfig);

//get auth instance
export const auth = getAuth();

//create google auth provider
export const Providers = {
  google: new GoogleAuthProvider(),
  facebook: new FacebookAuthProvider(),
};
