import React from 'react';
import PostCards from './PostCards';
import styled from 'styled-components';

const Posts = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
`;

const PostList = props => {
  return (
    <Posts>
      PostList
      {/* {props.posts.map(post => {
        return <PostCards key={post.id} text={post.text} />;
      })} */}
    </Posts>
  );
};

export default PostList;
