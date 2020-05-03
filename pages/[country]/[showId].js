import { Fragment } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import Cast from './../../components/cast/Cast';
import Header from './../../components/header/Header';

const ShowId = ({ show }) => {
  const { name, image, summary, _embedded } = show;

  return (
    <Fragment>
      <Header />
      <div className="show-details">
        <div
          className="show-details__poster"
          style={{ backgroundImage: `url(${image.original})` }}></div>
        <h1>{name}</h1>
        <section>{parse(summary)}</section>
        {_embedded.cast.length > 0 && <Cast cast={_embedded.cast} />}
      </div>
    </Fragment>
  );
};

ShowId.getInitialProps = async ctx => {
  const { showId } = ctx.query;
  const res = await axios.get(
    `http://api.tvmaze.com/shows/${showId}?embed=cast`
  );

  return {
    show: res.data,
  };
};

export default ShowId;
