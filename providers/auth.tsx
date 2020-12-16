import { useState, useEffect } from 'react';
import nookies from 'nookies';
import firebaseClient from '../lib/firebase-client';
import AuthContext from '../contexts/auth';

const AuthProvider = ({ children }: any) => {
  const cookieKey = "token";
  const interval = 10 * 60 * 1000;
  const [user, setUser] = useState<firebaseClient.User | null>(null);

  useEffect(() => {
    return firebaseClient.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.destroy(null, cookieKey);
        return;
      }

      const token = await user.getIdToken();
      setUser(user);
      nookies.destroy(null, cookieKey);
      nookies.set(undefined, cookieKey, token, {});
    });
  }, []);

  useEffect(() => {
    const handler = setInterval(async () => {
      const user = firebaseClient.auth().currentUser;
      if (user) {
        await user.getIdToken(true);
      }
    }, interval);
    return () => clearInterval(handler);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider;
