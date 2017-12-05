import React from 'react'
var thisStyle = require("../../public/css/headerCss.css");

export default class ComponentHeaderGood extends React.Component{
    constructor(){
        super();
        this.state = { num:100 ,age:14}
    }
    componentWillMount(){
        console.log("ComponentHeaderGood - componentWillMount");
    }
    componentDidMount(){
        console.log("ComponentHeaderGood - componentDidMount");
    }
    changeUser(age){
        this.setState({age:age});
        // var sb = document.getElementById("button");
        // ReactDom.findDOMNode(sb).style.color="red";


            this.refs.submit.style.color="red";
    }


    render(){
        setTimeout(()=>{
            this.setState({age:"11221"});
        },4000);
        let user = "xiao ming";
        return (
            <div className={thisStyle.headerCss} >
                <h1 >{user=="xiao ming" ? "这是"+user:"这不是"}{this.state.num}</h1>
                <h1>this is header good！{this.state.age} </h1>
                <input id="button" ref="submit" type="button" value="change" onClick={this.changeUser.bind(this,12121)}/>

            </div>
        )
    }
}