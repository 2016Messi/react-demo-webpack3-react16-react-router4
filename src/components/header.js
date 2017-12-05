var React = require('react');
import { Link } from 'react-router-dom'
import { Button } from 'antd';

export default class ComponentHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            changeRed : false
        };
    };

    onPanelChange(value, mode) {
        console.log(value, mode);
    }

    changeMyColor(){
        this.setState({
            changeRed : !this.state.changeRed
        })
    }

    render(){
        const styleHeader = {
            // backgroundColor :(this.state.changeRed) ? "red" : "blue",
            color : "#333333",
            padding : "15px",
        };
        return (
            <header   style={styleHeader}>
                <h1>I'm header</h1>

                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/123">list</Link></li>
                    <li><Link to="/detail">详情页面</Link></li>
                </ul>
                <Button type="primary">Primary</Button>
                <input type="button" value="changeColor" onClick={this.changeMyColor.bind(this)}/>
                <hr/>
            </header>
        )
    }
}