import React from "react";

class ToDoItems extends React.Component {
    render() {
        const toDoEntries = this.props.entries;
        const listItems = toDoEntries.map(this.createTasks); //calls createTasks() on each item of the array

        return (
            <ul className="theList">
                {listItems}
            </ul>);
    }

    createTasks(item) {
        return <li key={item.key}>
            {item.text}
        </li>
    }

}

export default ToDoItems;