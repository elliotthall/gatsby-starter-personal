import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import React from 'react';
import style from './post-card.module.styl';
import PostTag from './post-tag';

const PostCard = ({ title, description, link, coverImage, tags }) => {

  const tagsList = tags.map(tag => <PostTag key={tag} tag={tag} />);

  return (
    <div className={`${style.postCard} content-box`}>
      {coverImage && (
        <Link to={link}>
          <Img fluid={coverImage} />
        </Link>
      )}
      <div>
        <Link className={style.postCardTitleLink} to={link}>
          <h2 className="post-card__title">{title}</h2>
        </Link>
        <p className="post-card__description">{description}</p>
        <div className={style.postTags}>{tagsList}</div>
      </div>
    </div>
  );
};

const coverImageShape = PropTypes.shape({
  aspectRatio: PropTypes.number,
  base64: PropTypes.string,
  sizes: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string
});

PostCard.propTypes = {
  coverImage: coverImageShape,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
};

export default PostCard;