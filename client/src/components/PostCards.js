import React from 'react';

const PostCards = props => {
  return (
    <div>
      <p>{props.post.text}</p>
    </div>
  );
};

export default PostCards;
