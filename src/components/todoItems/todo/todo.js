import React, { Component } from "react";
import classes from "./todo.module.css";

import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Todo extends Component {
  state = {
    name: "",
    isEditing: false,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { item, removeItem, id } = this.props;
    const editInput = this.state.isEditing ? (
      <div>
        <input
          className={classes.editInput}
          autoFocus
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            console.log(this.state.name);
            this.props.editItem(id, this.state.name);
            this.setState({ isEditing: !this.state.isEditing, name: "" });
          }}
        >
          Save
        </button>
      </div>
    ) : null;
    return (
      <React.Fragment>
        <tr>
          <td className={classes.item}>{item.name}</td>
          <td width="25">
            <FontAwesomeIcon
              className={classes.icons}
              onClick={() => removeItem(item)}
              icon={faTrash}
            />
          </td>
          <td width="25">
            <FontAwesomeIcon
              className={classes.icons}
              onClick={() => {
                this.setState({ isEditing: !this.state.isEditing });
              }}
              icon={faPencilAlt}
            />
            {editInput}
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
export default Todo;
