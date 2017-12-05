import React from 'react';

import FooterChild from './footerChild'
import PropTypes from 'prop-types'
const defaultFooter = {
        footer : "这是默认值"
};
export default class ComponentFooter extends React.Component{
    constructor(){
        super();
        this.state = {
            newName : "张家辉",
            newAge : 23
        }
    }
    componentWillMount(){
        console.log(1111);
    }
    componentDidMount(){
        console.log("footer - componentDidMount");
    }
    childChange(event){
        this.setState({newAge:event.target.value})
    }
    render(){

        return(
            <footer>
                <h1>我的名字{this.state.newName}</h1>
                <h1>我的年龄{this.state.newAge}</h1>
                <h1>footerName:{this.props.footer}</h1>
                <FooterChild {...this.props} id={1} test={this.state.newName} childChange2={this.childChange.bind(this)} />

            </footer>
        )
    }
}
ComponentFooter.propTypes = {
     footer:  PropTypes.string
}
ComponentFooter.defaultProps = defaultFooter;