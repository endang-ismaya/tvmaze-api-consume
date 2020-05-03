import Thumbnail from './../thumbnail/Thumbnail';

const Cast = ({ cast }) => {
  const renderCast = () => {
    return cast.map((castItem, idx) => {
      const { image, name } = castItem.person;

      return (
        <li key={idx}>
          <Thumbnail
            imageUrl={image ? image.medium : undefined}
            caption={name}
          />
        </li>
      );
    });
  };

  return (
    <div className="cast">
      <h3>Cast</h3>
      <ul className="cast__list">{renderCast()}</ul>
    </div>
  );
};

export default Cast;
