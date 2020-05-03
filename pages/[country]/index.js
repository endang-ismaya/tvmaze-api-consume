import axios from 'axios';
import Link from 'next/link';
import Thumbnail from './../../components/Thumbnail';

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
    <React.Fragment>
      <ul className="tvshows">
        <Link href="/about">
          <a href="#!">About</a>
        </Link>
        {renderShows()}
      </ul>
    </React.Fragment>
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
