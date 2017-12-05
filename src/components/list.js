import React from 'react';
export default class ComponentList extends React.Component{
    componentWillMount(){
        console.log(this.props.match.params.id)
    }
    render(){
        return (
            <div>
                <h1>这里是列表页面 id:{this.props.match.params.id}</h1>
            </div>

        )
    }
}