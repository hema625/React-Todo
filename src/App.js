import React, { Component } from 'react';
import List from './components/list';
import AddList from './components/addlist';

class App extends Component {
  state = {
     todos : [
      {id : 1, content : "Complete Node.Js series"},
      {id : 2, content : "Complete Blogapp"},
      {id : 3, content : "Complete To-do app"}
     ]
  };

  delete = (id)=> {
    console.log(id);
    let g = this.state.todos.filter(num=> {
          return num.id!== id;
    })
    this.setState({
      todos: g
    })
  }

  f = (arg) => {
    // console.log(2,arg);
    arg.id = Math.random();
    let o = [...this.state.todos,arg];
    this.setState({
      todos : o
    })
  }
   
  render() {
    return (
      <div className="todo-app container">
      <h1 className = "center blue-text">Todos</h1>
          <List pass = {this.state.todos} del = {this.delete}/>
          <AddList fun = {this.f}/>
      </div>
    );
  }
}

export default App;
