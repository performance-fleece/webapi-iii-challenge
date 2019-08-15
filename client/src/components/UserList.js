import React from 'react';
import styled from 'styled-components';

import UserCard from './UserCard';

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
`;

const UserList = props => {
  return (
    <ListWrapper>
      {props.users.map(user => {
        return <UserCard key={user.id} user={user} />;
      })}
    </ListWrapper>
  );
};

export default UserList;
