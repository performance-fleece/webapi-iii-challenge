import React from 'react';
import './App.css';
import { fetchUsers } from './actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import UserList from './components/UserList';
import UserDisplay from './components/UserDisplay';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route
          exact
          path="/"
          render={props => <UserList {...props} users={this.props.users} />}
        />
        <Route path="/users/:id" component={UserDisplay} />
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default connect(
  mapStateToProps,
  { fetchUsers }
)(App);
