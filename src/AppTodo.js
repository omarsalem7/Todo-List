import React, { Component } from "react";
import "./AppTodo.css";
import TodoItems from "./components/todoItems/todoItems";
import AddItem from "./components/addItem/addItem";

class AppTodo extends Component {
  state = {
    items: [
      { id: 1, name: "item1" },
      { id: 2, name: "item2" },
      { id: 3, name: "item3" },
    ],
  };
  removeItem = (item) => {
    let list = this.state.items.filter((it) => item.id !== it.id);
    this.setState({ items: list });
  };
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items: items });
  };
  editItem = (id, name) => {
    let list = this.state.items.map((it) => {
      if (id === it.id) {
        return { ...it, name: name };
      }
      return it;
    });
    this.setState({ items: list });
    
  };
  render() {
    return (
      <div className="App">
        <h1>My Todo</h1>
        <AddItem addItem={this.addItem} />
        <TodoItems
          items={this.state.items}
          editItem={this.editItem}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}
export default AppTodo;
