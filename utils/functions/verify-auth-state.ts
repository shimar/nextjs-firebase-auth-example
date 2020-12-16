import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import firebaseAdmin from '../../lib/firebase-admin';

const redirectTop = {
  redirect: {
    destination: '/',
    permanent: false,
  },
  props: {} as never,
};

const redirectSignin = {
  redirect: {
    destination: '/signin',
    permanent: false,
  },
  props: {} as never,
};

const empty = {
  props: {},
};

const verifyAuthState = async (ctx: GetServerSidePropsContext) => {
  const unauthenticated = ['/signin', '/signup'];
  const cookies = nookies.get(ctx);
  const url = ctx.req.url || '';
  if (unauthenticated.includes(url)) {
    if (cookies.token) {
      return redirectTop;
    } else {
      return empty;
    }
  }

  try {
    await firebaseAdmin.auth().verifyIdToken(cookies.token);
    return empty;
  } catch (err) {
    return redirectSignin;
  }
};

export default verifyAuthState;
