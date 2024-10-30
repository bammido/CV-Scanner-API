import { Injectable } from '@nestjs/common';
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class FirebaseService {
  firebaseCredential = {
    // type: 'service_account',
    projectId: process.env.FIREBASE_PROJECT_ID,
    // private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    // client_id: process.env.FIREBASE_CLIENT_ID,
    // auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    // token_uri: 'https://oauth2.googleapis.com/token',
    // auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    // client_x509_cert_url:
    //   'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-seev6%40cv-scanner-3e7e3.iam.gserviceaccount.com',
    // universe_domain: 'googleapis.com',
  };
  firebaseApp = initializeApp({
    credential: cert(this.firebaseCredential),
  });
  defaultAuth = getAuth(this.firebaseApp);

  async verifyIdToken({ idToken }: { idToken: string }) {
    const auth = await getAuth().verifyIdToken(idToken);

    return auth;
  }
}
