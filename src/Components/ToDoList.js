import React from "react";
import ToDoItems from "../Components/ToDoItems";

function Header() {
    return (
        <header>
            {/*<nav className="navbar navbar-light bg-light">*/}
            {/*<span className="navbar-brand">*/}
            Initial compiler redux
            {/*</span>*/}
            {/*    </nav>*/}
        </header>);
}

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsArray: [] //array of items
        };

        // This binding is necessary to make `this` work in the callback
        this.addTask = this.addTask.bind(this);
    }

    render() {
        return (
            <div className="toDoListMain">
                <div className="myHeader">
                    <Header/>
                </div>
                <div className="myInput">
                    <form onSubmit={this.addTask}>
                        <input ref={(a) => this.reffedInputElement = a}
                               placeholder="Enter your task...">
                        </input>
                        <button type="submit">+</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.itemsArray} />
            </div>
        );
    }

    addTask(e) {
        e.preventDefault(); //overrides default behaviour of submit (page reload and clearing all)

        if (this.reffedInputElement.value !== "") {
            let newItem = {
                text: this.reffedInputElement.value,
                key: Date.now() //we use Date.now to give unique key for components
            };

            // this.setState((prevState) => {
            //     return {
            //         itemsArray: prevState.itemsArray.concat(newItem)
            //     };
            // })

            this.setState({
                itemsArray: this.state.itemsArray.concat(newItem)
            });

            this.reffedInputElement.value = ""
        }
    }
}

export default ToDoList;
