import Router from 'next/router';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

Home.getInitialProps = ctx => {
  const country = ctx.query.country || 'us';

  process.browser
    ? Router.replace('/[country]', `${country}`)
    : ctx.res.writeHead(302, { Location: `/${country}` });

  ctx.res.end();
};

export default Home;
