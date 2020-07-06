import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAM_CTokXYRiV0-Vcvyh3onODRQVM8OZaA',
  authDomain: 'smart-home-budget.firebaseapp.com',
  databaseURL: 'https://smart-home-budget.firebaseio.com',
  projectId: 'smart-home-budget',
  storageBucket: 'smart-home-budget.appspot.com',
  messagingSenderId: '172251613097',
  appId: '1:172251613097:web:89ee5cdd0e760696c466b8',
};

firebase.initializeApp(firebaseConfig);
