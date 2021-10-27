import { initializeApp } from "firebase/app";
import {getMessaging, getToken, onMessage} from "firebase/messaging";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAoBAydROv3Qwyn5J3_EutU2XRW8khE8qg",
    authDomain: "hello-world-b0136.firebaseapp.com",
    projectId: "hello-world-b0136",
    storageBucket: "hello-world-b0136.appspot.com",
    messagingSenderId: "279813137456",
    appId: "1:279813137456:web:c3a6f0f3ad1227f962f9f5",
    measurementId: "G-S0NDNX040N"
});


const messaging = getMessaging(firebaseApp);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then(function(registration) {
            console.log('Registration successful, scope is:', registration.scope);
        }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
    });
}

getToken(messaging, { vapidKey: 'BLUSCDTEaVlDDepz5mnvqWn0vH3kCUQGXjhs4j-u7w-OIYxjvIxuqi9u-GPBk-ilW_pZlWhOwfe8-G3FqXvqlq8' }).then((currentToken) => {
    document.getElementById("root").innerText = currentToken;
    if (currentToken) {
    } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
    }
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
});

onMessage(messaging, (payload) => {
    alert(payload);
});