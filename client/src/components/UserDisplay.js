import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchUserPosts, getUser } from '../actions';
import PostCards from './PostCards';
import PostList from './PostList';

const Posts = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;
`;

class UserDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.props.getUser(this.props.match.params.id);
    this.props.fetchUserPosts(this.props.match.params.id);
  }

  render() {
    console.log(this.props);

    return (
      <div>
        TESTING
        <h3>{this.props.user.name}</h3>
        {this.props.postsFetched ? (
          <Posts>
            {this.props.postdata.posts.map(post => {
              return <PostCards text={post.text} key={post.id} />;
            })}
          </Posts>
        ) : (
          'Unfetched '
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ postdata, user, postsFetched }) => ({
  postdata,
  user,
  postsFetched
});

export default connect(
  mapStateToProps,
  { fetchUserPosts, getUser }
)(UserDisplay);
