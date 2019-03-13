import React, { Component } from 'react';

import Menu from './components/Menu';
import CreatePost from './components/CreatePost';

var Home = (props) => {
    return (
        <div>
            <Menu />
            <CreatePost />
        </div>
    )
};