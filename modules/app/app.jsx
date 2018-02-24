import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Header } from '../component/header/header.jsx';
import { List } from '../page/list/list.jsx';
import { Comments } from '../page/comments/comments.jsx';
import { Detail } from '../page/detail/detail.jsx';
import * as appLess from './app.less';


// 第一点改动，用ES6语法创建组件
export class App extends Component {
	// 构造函数
	constructor(props) {
		// 构造函数继承
		super(props);
	}
	// 渲染方法
	render() {
		return (
			<div>
				<Header></Header>
				{/*定义路由规则*/}
				<Switch>
					<Route path="/list" component={List}></Route>
					<Route path="/detail/:id" component={Detail}></Route>
					<Route path="/comments/:id" component={Comments}></Route>
					<Redirect from="/" to="/list"></Redirect>
				</Switch>
			</div>
		)
	}
}