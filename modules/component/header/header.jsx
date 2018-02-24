import React, { Component } from 'react';
import * as headerLess from './header.less';

// 定义Header组件
export class Header extends Component {
	childMethod() {
		// 返回上一个状态页面
		history.go(-1)
	}
	render() {
		return (
			<header className="header">
				<div className="go-back" onClick={this.childMethod.bind(this)}>&lt;</div>
				<div className="login">登录</div>
				<h1>新闻平台网站</h1>
			</header>
		)
	}
}