import { Fragment } from 'react';
import axios from 'axios';
import Thumbnail from '../../components/thumbnail/Thumbnail';
import Error from 'next/error';
import cookies from 'nookies';

const CountryIndex = ({ shows, country }) => {
  const renderShows = () => {
    if (shows.length <= 0) {
      return <Error statusCode="400" />;
    }

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
  const { defaultCountry } = cookies.get(ctx);
  let country = ctx.query.country || defaultCountry || 'us';
  if (country === 'undefined') {
    country = 'us';
  }

  try {
    const res = await axios.get(
      `https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
    );

    return {
      shows: res.data,
      country,
    };
  } catch (error) {
    return {
      shows: [],
      country,
    };
  }
};

export default CountryIndex;
