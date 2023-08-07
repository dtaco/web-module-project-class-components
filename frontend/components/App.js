import React from 'react';
import TodoList from './TodoList';
import Form from './Form';



export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'Workout',
          id: 213123123123,
          completed: true
        }
      
      ]
    }
  }
  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todo List</h1>
        <TodoList todos={ todos }/>
        <Form />
      </div>
    )
  }
}
