import React, { Component } from 'react';
class Todoitem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditAble: false
    };
  }
  onChangeHandler = (e) => {
    if (e.key === 'Enter'){
      this.setState({
        isEditAble: false
      })
    }
  }
  render() {
    let itemsHTML = this.state.isEditAble ? (
      <input
        onKeyPress={e => this.onChangeHandler(e)}
        onChange={e =>
          this.props.todoUpdateHandler(e.target.value, this.props.id)
        }
        type="text"
        value={this.props.value}
      />
    ) : this.props.isDone ? (
      <del>{this.props.value}</del>
    ) : (
      this.props.value
    );

    return (
      <li key={this.props.id} className="todolistitem">
        {itemsHTML}
        <span onClick={() => this.props.todoItemsDeleteHandler(this.props.id)}>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </span>
        <span onClick={() => this.setState({ isEditAble: true })}>
          <i class="fa fa-pencil-square-o" aria-hidden="true" />
        </span>
        <span onClick={() => this.props.todoCompleteHandler(this.props.id)}>
          {this.props.isDone ? (
            <i className="fa fa-check" />
          ) : (
            <i class="fa fa-circle-thin" aria-hidden="true" />
          )}
        </span>
      </li>
    );
  }
}
export default Todoitem