import React from 'react';
import {Link} from 'react-router-dom'
export default class ComponentDetail extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    这里是嵌套在首页中的详情页面
                </h1>
                <ul>
                    <li><Link to="/detail/liu">刘德华</Link></li>
                    <li><Link to="/detail/zhang">张学友</Link></li>
                    <li><Link to="/detail/chen">陈小春</Link></li>
                    <li><Link to="/detail/wu">武则天</Link></li>
                </ul>
            </div>
        )

    }
}
