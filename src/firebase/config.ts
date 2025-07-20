import { getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase config from env
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Validate config
if (!firebaseConfig.projectId) {
  console.warn(
    "Firebase config missing projectId. Analytics will not work. Check your .env.local file."
  );
}

// Initialize Firebase App (singleton)
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Direct export: Analytics initialized only in browser
let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("🔥 Firebase Analytics initialized (direct)");
    }
  });
}

// Async-safe version for SSR
export const getAnalyticsInstance = async () => {
  if (typeof window !== "undefined") {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  }
  return null;
};

export { app, analytics };
