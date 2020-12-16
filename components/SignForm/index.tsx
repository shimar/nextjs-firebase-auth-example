import { useState } from 'react';
import firebaseClient from '../../lib/firebase-client';
import styles from './SignForm.module.scss';

export interface SignFormProps {
  buttonCaption: string,
  isSignin: boolean,
};

export const SignForm = (props: SignFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async () => {
    try {
      await firebaseClient.auth().signInWithEmailAndPassword(email, password);
      window.location.href = '/';
    } catch (err) {
      // TODO: error handling.
      console.log(err);
    }
  };

  const signup = async () => {
    try {
      await firebaseClient.auth().createUserWithEmailAndPassword(email, password);
      window.location.href = '/';
    } catch (err) {
      // TODO: error handling.
      console.log(err);
    }
  };

  return (
    <div className={styles.signForm}>
      <div className={styles.signForm__inputs}>
        <input className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" autoFocus autoComplete="email" required />
        <input className="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="off" required />
      </div>
      <div>
        <button className={styles.signForm__submit + " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"} onClick={props.isSignin ? signin : signup}>{props.buttonCaption}</button>
      </div>
    </div >
  );
};
