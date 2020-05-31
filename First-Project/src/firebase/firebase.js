import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDV7zpSkLuNqVD-t0G1FhTIC0HDu3eXIeI",
    authDomain: "fir-app-be549.firebaseapp.com",
    databaseURL: "https://fir-app-be549.firebaseio.com",
    projectId: "fir-app-be549",
    storageBucket: "fir-app-be549.appspot.com",
    messagingSenderId: "161934680660",
    appId: "1:161934680660:web:a0c4e04caa06de02d0c3c1"
};

export const firebaseApp= firebase.initializeApp(firebaseConfig);
export const goalRef= firebase.database().ref().child("goals");
export const completeGoalRef= firebase.database().ref().child("completeGoals");
export const users= firebase.database().ref("users");
export const  User = uid => this.db.ref(`users/${uid}`);