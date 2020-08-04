import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Todo list, mohterfucker! xD

        </span>
            </nav>
        </header>);
}


ReactDOM.render(
    <Header/>,
    document.getElementById('root')
);
