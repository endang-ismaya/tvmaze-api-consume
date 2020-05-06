import axios from 'axios';

const Cast = props => {
  return (
    <div>
      <code>{JSON.stringify(props.person)}</code>
    </div>
  );
};

Cast.getInitialProps = async ctx => {
  const { query } = ctx;

  const res = await axios.get(`http://api.tvmaze.com/people/${query.personId}`);

  return {
    person: res.data,
  };
};

export default Cast;
