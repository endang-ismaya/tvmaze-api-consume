import axios from 'axios';
import parse from 'html-react-parser';

const ShowId = ({ show }) => {
  const { name, image, summary } = show;

  return (
    <div className="show-details">
      <div
        className="show-details__poster"
        style={{ backgroundImage: `url(${image.original})` }}></div>
      <h1>{name}</h1>
      <section>{parse(summary)}</section>
    </div>
  );
};

ShowId.getInitialProps = async () => {
  const res = await axios.get(`http://api.tvmaze.com/shows/1?embed=cast`);

  return {
    show: res.data,
  };
};

export default ShowId;
