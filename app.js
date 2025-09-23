// ضع بيانات التكوين الخاصة بمشروعك في Firebase هنا
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

function requestPermission(){
  Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
      console.log('تم تفعيل الإشعارات');
      messaging.getToken({vapidKey: 'AIzaSyDaE4fiAyK6twj6Mzcul8ey2MX2DyPQv_c'}).then((currentToken) => {
        if (currentToken) {
          console.log('Token:', currentToken);
          alert('تم الحصول على التوكن، شوف الكونسول');
        } else {
          console.log('No registration token available.');
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
    } else {
      console.log('الإشعارات مرفوضة');
    }
  });
}

// استقبال الإشعارات لما الصفحة مفتوحة
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  alert('إشعار جديد: ' + (payload.notification.title || 'بدون عنوان'));
});
