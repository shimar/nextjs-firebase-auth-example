import { GetServerSidePropsContext } from 'next';
import verifyAuthState from '../utils/functions/verify-auth-state';
import { SignForm } from '../components/SignForm';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return verifyAuthState(ctx);
};

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg-px:8">
      <div className="max-w-md w-full space-y-8">
        <div className="container mx-auto">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in
          </h2>
          <SignForm buttonCaption="Sign In" isSignin={true} />
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <a href='/signup' className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
              Sign up now!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
