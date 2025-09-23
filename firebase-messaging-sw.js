importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

var firebaseConfig = {
   apiKey: "AIzaSyDaE4fiAyK6twj6Mzcul8ey2MX2DyPQv_c",
  authDomain: "pray-31a6d.firebaseapp.com",
  projectId: "pray-31a6d",
  storageBucket: "pray-31a6d.firebasestorage.app",
  messagingSenderId: "1080572236954",
  appId: "1:1080572236954:web:61fcc9c5ad70331d073b23",
  measurementId: "G-VLDCD4KJR3"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const notificationTitle = payload.notification.title || 'Background Message';
  const notificationOptions = {
    body: payload.notification.body || '',
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
