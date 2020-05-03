import Link from 'next/link';

const Thumbnail = ({ imageUrl, caption, href = '', as = '' }) => {
  return (
    <Link href={href} as={as}>
      <a href="#!">
        <div className="thumbnail">
          <img src={imageUrl} alt={caption} className="thumbnail__image" />
          <h3 className="thumbnail__caption">{caption}</h3>
        </div>
      </a>
    </Link>
  );
};

export default Thumbnail;
