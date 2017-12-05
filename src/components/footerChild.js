import React from 'react';
import myMixinLog from './myMinxin'
import ReactMixin from 'react-mixin'
export default class FooterChild extends React.Component{

    componentWillMount(){
        myMixinLog.logo()
    }

    render(){
        return(
            <div>
                <h1></h1>
                <label> 默认值：</label><h3>{this.props.test}</h3>
                <label>我是footer的子页面: {this.props.footer}and {this.props.id}</label><input type="text" onChange={this.props.childChange2} />

            </div>
        )
    }
}

ReactMixin(FooterChild.prototype,myMixinLog);