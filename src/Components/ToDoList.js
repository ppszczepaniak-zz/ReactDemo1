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
        this.handleSubmit = this.handleSubmit.bind(this);         // This binding is necessary to make `this` work in the callback

    }

    render() {
        return (
            <div className="toDoListMain">
                <div className="myHeader">
                    <Header/>
                </div>
                <div className="taskInput">
                    <form onSubmit={this.handleSubmit}>
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
                    <ToDoItems entries={this.state.itemsArray}/>

                </div>
            </div>
        );
    }

    handleSubmit(e) {
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
}

export default ToDoList;
