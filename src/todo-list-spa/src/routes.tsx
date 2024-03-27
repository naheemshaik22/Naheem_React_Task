import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login, TodoList, Home } from './pages';


export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/login" exact component={Login} />
            <Route path="/Todo" exact component={TodoList} />
            <Route path="/" exact component={Home} />
        </BrowserRouter>
    );
};
