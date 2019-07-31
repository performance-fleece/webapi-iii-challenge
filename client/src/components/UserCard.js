import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserWrapper = styled.div`
  border: 1px solid darkgrey;
  border-radius: 10px;
  width: 24%;
  margin: 5px 0;
`;

class UserCard extends React.Component {
  render() {
    return (
      <UserWrapper>
        <Link
          to={{
            pathname: `/users/${this.props.user.id}`,
            state: {
              username: `${this.props.user.name}`
            }
          }}
        >
          <h4>{this.props.user.name}</h4>
        </Link>

        {/* <Link to={`/users/${this.props.user.id}`}>
          <h4>{this.props.user.name}</h4>
        </Link> */}
      </UserWrapper>
    );
  }
}

export default UserCard;
