import React from 'react';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import verifyAuthState from '../utils/functions/verify-auth-state';
import Layout from '../components/Layout';
import useAuth from '../hooks/auth';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return verifyAuthState(ctx);
}

const Profile = () => {
  const user = useAuth().user;

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="mt-6 mb-6 text-center text-3xl font-extrabold text-gray-900">Profile</h1>
        <div className="mx-auto flex items-center flex-col justify-center">
          <p className="mb-2 font-mono font-semibold">{user && user.email}</p>
          <Link href="/">
            <a className="mb-2 font-medium text-indigo-600 hover:text-indigo-500">Back to Index page.</a>
          </Link>
        </div>
      </div>
    </Layout>
  )
};

export default Profile;
