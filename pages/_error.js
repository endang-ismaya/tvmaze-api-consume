const CustomError = ({ statusCode }) => {
  if (statusCode === 404) {
    return <h1>The resource was not found...</h1>;
  }

  return <h1>Something went wrong! please try it again later...</h1>;
};

CustomError.getInitialProps = ({ err, res }) => {
  return {
    statusCode: res ? res.statusCode : err ? err.statusCode : 404,
  };
};
