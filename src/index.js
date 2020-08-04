import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from "./ToDoList";

const destination = document.getElementById('root');

ReactDOM.render(
    <div>
        <ToDoList/>
    </div>,
    destination
);
