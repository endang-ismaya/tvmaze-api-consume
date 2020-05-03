import { Fragment } from 'react';
import axios from 'axios';
import Thumbnail from '../../components/thumbnail/Thumbnail';

const CountryIndex = ({ shows, country }) => {
  const renderShows = () => {
    return shows.map((showItem, idx) => {
      const { image, name, id } = showItem.show;

      return (
        <li key={idx}>
          <Thumbnail
            imageUrl={
              image
                ? image.medium
                : 'https://via.placeholder.com/210x295?text=?'
            }
            caption={name}
            href="/[country]/[showId]"
            as={`/${country}/${id}`}
          />
        </li>
      );
    });
  };

  return (
    <Fragment>
      <div className="home">
        <ul className="tvshows">{renderShows()}</ul>
      </div>
    </Fragment>
  );
};

// run in server
CountryIndex.getInitialProps = async ctx => {
  const { country } = ctx.query || 'us';

  const res = await axios.get(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  );

  return {
    shows: res.data,
    country,
  };
};

export default CountryIndex;
