/* eslint-disable */

import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

export class TodoItem extends Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#c0000',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { completed, id, title } = this.props.todo;
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li>
        <div onDoubleClick={this.handleEditing} style={viewMode}>

          <input type="checkbox" className="checkBox" checked={completed} onChange={() => this.props.handleProps(id)} />

          {title}
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
          <button onClick={() => this.props.deleteTodoProps(id)}>
            <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
          </button>
        </div>
        <input
          type="text"
          style={editMode}
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}

          onKeyDown={this.handleUpdatedDone}
          className="textInput"
        />

      </li>
    );
  }
}

export default TodoItem;
