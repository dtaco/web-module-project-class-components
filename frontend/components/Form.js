import React from 'react'
import uuid from 'uuid';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input:""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
    
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }
  render() {
    return (
      <>
        <form>
            <input 
            placeholder="Enter task here" 
            onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Add</button>
        </form>
      </>
    )
  }
}
