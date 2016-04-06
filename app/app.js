import React, {Component} from 'react';
import UserList from './UserList.js';

export default class App extends Component{
  constructor() {
    super();
  }

  render(){
    return <UserList users={this.props.store.users} />;
  }
}
