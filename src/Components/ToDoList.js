import React from "react";
import ToDoItems from "../Components/ToDoItems";

function Header() {
    return (
        <header>
            Initial compiler redux
        </header>);
}

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef(); //create reference for input box
        this.state = {
            itemsArray: []
        };
        this.addTask = this.addTask.bind(this);         // This binding is necessary to make `this` work in the callback
        this.removeTask = this.removeTask.bind(this);         // This binding is necessary to make `this` work in the callback

    }

    render() {
        return (
            <div className="toDoListMain">
                <div className="myHeader">
                    <Header/>
                </div>
                <div className="inputAndButtonDiv">
                    <form onSubmit={this.addTask}>
                        <input
                            id="taskInput"
                            placeholder="Enter your task..."
                            ref={this.inputRef}
                        >
                        </input>
                        <button className="myButton">
                            +
                        </button>
                    </form>
                </div>
                <div className="listOfTasks">
                    <ToDoItems
                        entries={this.state.itemsArray}
                        removeTask={this.removeTask}
                    />
                </div>
            </div>
        );
    }

    addTask(e) {
        e.preventDefault();
        const input = this.inputRef;    //alternative: document.getElementById("taskInput");
        if (input.current.value !== "") {
            let newItem = {
                text: input.current.value, //don't use "current" in alt version
                key: Date.now() //we use Date.now to give unique key for components
            };
            this.setState({
                itemsArray: this.state.itemsArray.concat(newItem)
            });
            input.current.value = "";
        }
    }

    removeTask(key) {
        const filteredItems = this.state.itemsArray.filter(function (item) {
            return (item.key !== key);
        }); //we filter all entries except the one which is clicked

        this.setState({
            itemsArray: filteredItems
        })
    }
}


//TO DO
/*
add done task below (strikethrough)
remove done task as you now remove normal task
 */

export default ToDoList;
