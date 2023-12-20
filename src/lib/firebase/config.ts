import "server-only";

import {getStorage} from "firebase-admin/storage";
import {getFirestore} from "firebase-admin/firestore";
import {cert, getApps, initializeApp} from "firebase-admin/app";


const firebaseCredentials = {
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: (process.env.FIREBASE_PRIVATE_KEY as string).replace(/\\n/g, '\n'),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

const APP_NAME = 'coderstore-almeida';

const app = getApps().find(it => it.name === APP_NAME) ||
  initializeApp({
    credential: cert(firebaseCredentials),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  }, APP_NAME)


export const db = getFirestore(app);
export const storage = getStorage(app);
