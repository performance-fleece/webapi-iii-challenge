import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchUserPosts, getUser } from '../actions';
import PostCards from './PostCards';
import PostList from './PostList';

class UserDisplay extends React.Component {
  async componentDidMount() {
    this.props.getUser(this.props.match.params.id);
    this.props.fetchUserPosts(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        TESTING
        <h3>{this.props.user.name}</h3>
        {/* <PostList posts={this.props.postdata.posts} /> */}
        {this.props.postdata.posts.map(post => {
          return <PostCards post={post} id={post.id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ postdata, user }) => ({ postdata, user });

export default connect(
  mapStateToProps,
  { fetchUserPosts, getUser }
)(UserDisplay);
