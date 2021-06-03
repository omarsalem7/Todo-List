import classes from "./todoItems.module.css";
import React from "react";
import Todo from "./todo/todo";

const TodoItems = ({ items, removeItem, editItem }) => {
  let length = items.length;
  const listItems = length ? (
    items.map((item) => {
      return (
        <Todo
          editItem={editItem}
          key={item.id}
          id={item.id}
          removeItem={removeItem}
          item={item}
        />
      );
    })
  ) : (
    <p>No items</p>
  );
  return <table className={classes.myTable} ><tbody>{listItems}</tbody></table>;
};
export default TodoItems;

