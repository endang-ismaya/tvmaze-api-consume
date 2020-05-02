import axios from 'axios';
import Thumbnail from './../../components/Thumbnail';

const CountryIndex = ({ shows }) => {
  const renderShows = () => {
    return shows.map((showItem, idx) => {
      const { image, name } = showItem.show;

      return (
        <li key={idx}>
          <Thumbnail imageUrl={image ? image.medium : ''} caption={name} />
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <ul className="tvshows">{renderShows()}</ul>
    </React.Fragment>
  );
};

// run in server
CountryIndex.getInitialProps = async (ctx) => {
  const { country } = ctx.query || 'us';

  const res = await axios.get(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  );

  return {
    shows: res.data,
  };
};

export default CountryIndex;
