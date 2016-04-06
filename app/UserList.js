import React, {Component} from 'react';
import User from './User';

export default class UserList extends Component{
  constructor() {
    super();
  }

  render(){
    return <div>
      {
        this.props.users.map((name, index) => <User key={index} name={name} />)
      }
    </div>;
  }
}
