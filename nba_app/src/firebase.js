import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEN0j-PMnpDKT8stMfOGw_eRzGeM3y9A4",
  authDomain: "nba-full-9b188.firebaseapp.com",
  databaseURL: "https://nba-full-9b188-default-rtdb.firebaseio.com",
  projectId: "nba-full-9b188",
  storageBucket: "nba-full-9b188.appspot.com",
  messagingSenderId: "86258809282",
  appId: "1:86258809282:web:82845d78bca57874c73e5b",
  measurementId: "G-9T06T7P3B6",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseVideos = firebaseDB.ref("videos");
const firebaseTeams = firebaseDB.ref("teams");

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key,
    });
  });
  return data;
};
export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseVideos,
  firebaseTeams,
  firebaseLooper,
};
