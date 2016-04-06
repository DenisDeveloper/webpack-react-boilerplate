import React, {Component} from 'react';

export default class User extends Component{
  constructor() {
    super();
    this.state = { selected: false };
  }

  select(selected){
    this.setState({ selected: !selected });
  }

  render(){
    return <div onClick={() => this.select(this.state.selected)}>user: {this.state.selected ? this.props.name : 'default'}</div>;
  }
}
