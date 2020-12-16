import React from 'react';
import Link from 'next/link';
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import firebaseClient from '../lib/firebase-client';
import verifyAuthState from '../utils/functions/verify-auth-state';
import Layout from '../components/Layout';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return verifyAuthState(ctx);
};

const Index = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const signout = async () => {
    await firebaseClient.auth().signOut();
    window.location.href = '/signin';
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="mt-6 mb-6 text-center text-3xl font-extrabold text-gray-900">Index</h1>
        <div className="mx-auto flex items-center flex-col justify-center">
          <Link href="/profile">
            <a className="mb-2 font-medium text-indigo-600 hover:text-indigo-500">Profile</a>
          </Link>
          <a className="mb-2 font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer" onClick={signout}>Sign out</a>
        </div>
      </div>
    </Layout >
  )
};

export default Index;
