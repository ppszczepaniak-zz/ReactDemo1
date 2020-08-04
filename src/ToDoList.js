import React from "react";

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
    render() {
        return (
            <div>
                <div className="myHeader">
                    <Header/>
                </div>
                <div className="myButton">
                    <button type="button">add Item</button>
                </div>
                <div className="myInput">
                    <form>
                        <input placeholder="enter task"></input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ToDoList;
