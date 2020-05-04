import Router from 'next/router';
import cookies from 'nookies';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

Home.getInitialProps = ctx => {
  const { defaultCountry } = cookies.get(ctx) || 'us';
  const country =
    ctx.query.country || defaultCountry === 'undefined'
      ? 'us'
      : defaultCountry || 'us';

  process.browser
    ? Router.replace('/[country]', `${country}`)
    : ctx.res.writeHead(302, { Location: `/${country}` });

  ctx.res.end();
};

export default Home;
