import React,{Component}  from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import {HashRouter,Route, Router,Link,Switch} from 'react-router-dom';

import ComponentList from './../components/list'
import ComponentDetail from './../components/detail'

 export default class Root extends Component{
    render(){
        return(
                <div></div>
        );
    };
};

ReactDOM.render(
    <HashRouter>
            <div>
                <Route component={Index} path="/"/>
                <Route component={ComponentDetail} path="/detail"/>
                <Route exact component={ComponentList} path="/list/:id" />
            </div>
    </HashRouter>
    , document.getElementById("example")
);