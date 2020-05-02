import styles from './Thumbnail.module.css';

const Thumbnail = ({imageUrl, caption}) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} alt={caption} className={styles.thumbnail__image} />
      <h3 className={styles.thumbnail__caption}>{caption}</h3>
    </div>
  );
};

export default Thumbnail;
