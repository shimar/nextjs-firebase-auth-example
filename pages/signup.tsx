import React from 'react';
import { GetServerSidePropsContext } from 'next';
import verifyAuthState from '../utils/functions/verify-auth-state';
import { SignForm } from '../components/SignForm';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return verifyAuthState(ctx);
}

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg-px:8">
      <div className="max-w-md w-full space-y-8">
        <div className="container mx-auto">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up
          </h2>
          <SignForm buttonCaption="Sign Up" isSignin={false} />
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <a href='/signin' className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
