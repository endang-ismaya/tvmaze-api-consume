import Link from 'next/link';
import styles from './Thumbnail.module.css';

const Thumbnail = ({ imageUrl, caption, href = '', as = '' }) => {
  return (
    <Link href={href} as={as}>
      <a href="#!">
        <div className={styles.thumbnail}>
          <img
            src={imageUrl}
            alt={caption}
            className={styles.thumbnail__image}
          />
          <h3 className={styles.thumbnail__caption}>{caption}</h3>
        </div>
      </a>
    </Link>
  );
};

export default Thumbnail;
