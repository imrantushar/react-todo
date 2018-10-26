import React, { Component } from 'react';
import "./App.css";
import Todoitems from "./Todo/Todoitems/Todoitems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createtodo: false,
      todoitems: [
        
      ]
    };
  }
  createTodoHandler = () => {
    this.setState({
      createtodo: true
    });
  };

  onChangeHandler = e => {
    if (e.key === "Enter") {
      var newtodoitems = [
        ...this.state.todoitems,
        { id: this.state.todoitems.length, text: e.target.value, isDone: false }
      ];
      this.setState({
        createtodo: false,
        todoitems: newtodoitems
      });
    }
  };

  todoCompleteHandler = id => {
    let newtodoitems = this.state.todoitems.map(items => {
      if (id === items.id) {
        return { ...items, isDone: true };
      }
      return items;
    });
    this.setState({ todoitems: newtodoitems });
  };
  todoItemsDeleteHandler = id => {
    let newtodoitems = this.state.todoitems.filter(items => {
      return id !== items.id;
    });
    this.setState({ todoitems: newtodoitems });
  };

  todoUpdateHandler = (text, id) => {
    let oldtodoitems = this.state.todoitems.map(item => {
      if(id === item.id){
        return {
          ...item,
          text
        }
      }
      return item
    })
    this.setState({ todoitems: oldtodoitems });
  };

  render() {
    return (
      <div className="todolist-wrap">
        <div className="todolist">
          <h4>ToDo List</h4>
          <Todoitems
            todoUpdateHandler={this.todoUpdateHandler}
            todoItemsDeleteHandler={this.todoItemsDeleteHandler}
            todoCompleteHandler={this.todoCompleteHandler}
            items={this.state.todoitems}
          />
          {this.state.createtodo ? (
            <input
              onKeyPress={e => this.onChangeHandler(e)}
              type="text"
              placeholder="Type and hit Enter  "
            />
          ) : (
            <button onClick={this.createTodoHandler} className="btn-addnew">
              <i className="fa fa-plus-square" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
