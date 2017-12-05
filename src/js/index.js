import React from 'react';
import ReactDOM from 'react-dom';
import ComponentFooter from '../components/footer';
import ComponentHeader from '../components/header';
import ComponentHeaderGood from '../components/goodHeader';

import 'antd/dist/antd.css';

export default class Index extends React.Component{

    constructor(){
        super();
        this.state = {username :"Boy"};
    }
    componentWillMount(){
        console.log("index - componentWillMount");
    }
    componentDidMount(){
        console.log("index - componentDidMount");

    }

    render(){
        setTimeout(()=>{
            this.setState({username:"Mike"});
        },4000);
        return (
            <div>
                <ComponentHeader/>
                <ComponentFooter footer={"大家好我 是古天乐"} />
                <ComponentHeaderGood />
                <h1>{this.state.username}</h1>
            </div>
        )
    }
}
