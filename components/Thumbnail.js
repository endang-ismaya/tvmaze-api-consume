const Thumbnail = ({imageUrl, caption}) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} alt={caption} className="thumbnail__image" />
      <h3 className="thumbnail__caption">{caption}</h3>
    </div>
  );
};

export default Thumbnail;
