import React from "react";

class ToDoItems extends React.Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    render() {
        const toDoEntries = this.props.entries;
        const listItems = toDoEntries.map(this.createTasks); //calls createTasks() on each item of the array

        return (
            <ul className="theList">
                {listItems}
            </ul>);
    }

    createTasks(item) { //keys help React identify which items have changed (must be unique)
        return <li onClick={()=>this.deleteItem(item.key)}
            key={item.key}>
            {item.text}
        </li>
    }

    deleteItem(key) {
        this.props.removeTask(key);
    }

}

export default ToDoItems;