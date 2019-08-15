import React from 'react';
import styled from 'styled-components';

const Post = styled.div`
  border: 1px dotted black;
  border-radius: 10px;
  width: 90%;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const PostCards = props => {
  return (
    <Post>
      <p>{props.text}</p>
    </Post>
  );
};

export default PostCards;
