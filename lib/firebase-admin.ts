import firebaseAdmin from 'firebase-admin';
import sa from '../secrets.json';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: sa.private_key,
      clientEmail: sa.client_email,
      projectId: sa.project_id,
    }),
    databaseURL: `https://${sa.project_id}.firebaseio.com`,
  });
}

export default firebaseAdmin;
