import Thumbnail from './../thumbnail/Thumbnail';

const Cast = ({ cast }) => {
  const renderCast = () => {
    return cast.map((castItem, idx) => {
      const { image, name, id } = castItem.person;

      return (
        <li key={idx}>
          <Thumbnail
            imageUrl={image ? image.medium : undefined}
            caption={name}
            href={`/cast?personId=${id}`}
            as={`/cast/${id}`}
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
