import React from 'react';
import TodoList from './TodoList';
import Form from './Form';



export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        
      ]
    }
    
  }

  handleAdd = (newTask) => {
    const newTodo = {
      name: newTask,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }
  
  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return(todo.completed === false);
      })
    });
  }

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        }
          return todo
        })
      });
    }
  
  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <TodoList handleToggle={this.handleToggle} todos={ todos }/>
        <Form handleAdd={ this.handleAdd }/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
      
    )
  }
}
