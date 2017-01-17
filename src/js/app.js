import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './modules/App.jsx';
import Home from './modules/Home.jsx';
import Post from './modules/Post.jsx';

const apiResource = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json';

$.getJSON(apiResource + "&jsoncallback=?")
    .done(function(response) {
        ReactDOM.render((
            <Router history={hashHistory}>
                <Route path="/" component={App} apiResource={apiResource} apiResponse={response}>
                    <IndexRoute component={Home}/>
                    <Route path="/post/:postKey" component={Post}/>
                </Route>
            </Router>
        ), document.getElementById('app'))
    })
