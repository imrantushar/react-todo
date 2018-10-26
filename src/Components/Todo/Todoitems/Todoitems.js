import React, { Component } from 'react';
import Todoitem from "./Todoitem/Todoitem";
class Todoitems extends Component {
    render(){
      
        return <ul>
            {
              this.props.items.length === 0 ?
              <li>Sorry, Your todo is empty</li>
              :
              this.props.items.map(value => (
              <Todoitem
                todoUpdateHandler={this.props.todoUpdateHandler}
                todoItemsDeleteHandler={
                  this.props.todoItemsDeleteHandler
                }
                todoCompleteHandler={this.props.todoCompleteHandler}
                id={value.id}
                isDone={value.isDone}
                value={value.text}
              />
            ))
            
            }
          </ul>;
    }
}
export default Todoitems;