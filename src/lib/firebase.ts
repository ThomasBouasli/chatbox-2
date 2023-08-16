import { getAnalytics, isSupported } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, initializeFirestore, persistentLocalCache } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyDibFALHCXaw_WE0hOmLSZlr3DD1zMRXCo',
    authDomain: 'chatbox-a1493.firebaseapp.com',
    projectId: 'chatbox-a1493',
    storageBucket: 'chatbox-a1493.appspot.com',
    messagingSenderId: '569522095892',
    appId: '1:569522095892:web:020d59e438156a0f52a401',
    measurementId: 'G-1XZ5579XRJ',
};

export const app = initializeApp(firebaseConfig);
export const analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
export const auth = getAuth(app);

initializeFirestore(app, { localCache: persistentLocalCache() });

export const firestore = getFirestore(app);
export const storage = getStorage(app);
