import { Component } from "react";
import classes from "./addItem.module.css";
class AddItem extends Component {
  state = {
    name: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name) {
      this.props.addItem(this.state);
    }
    this.setState({ name: "" });
  };
  render() {
    return (
      <div className={classes.item}>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.name}
            type="text"
            placeholder="Enter Item"
            id="name"
            onChange={this.handleChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
export default AddItem;
