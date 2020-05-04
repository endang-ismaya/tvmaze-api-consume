import { Component } from 'react';
import cookies from 'nookies';
import Router from 'next/router';

const authenticate = ctx => {
  const { token } = cookies.get(ctx);

  // ctx.req -> coming from server side
  // checking if cookie is present
  // if not present, redirect user to signin page
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: `/signin` });
    return ctx.res.end();
  }

  if (!token) {
    Router.push('/signin');
  }

  return token;
};

const withAuthorization = WrappedComponent => {
  return class extends Component {
    static async getInitialProps(ctx) {
      // authentication
      const token = authenticate(ctx);

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withAuthorization;
