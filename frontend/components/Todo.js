import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.handleToggle(this.props.todo.id);
  }
  render() {
    return(
    <li className={this.props.todo.completed? 'complete' : ''}onClick={this.handleClick}>{this.props.todo.name}</li>
    )
  }
}
