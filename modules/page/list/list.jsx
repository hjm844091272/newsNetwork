import * as React from 'react';
import { Link } from "react-router-dom";
import { Util } from '../../mixins/util.jsx';
import * as listLess from './list.less';

// 三个页面组件
// 使用util的方法，要继承Util
export class List extends Util {
	// 初始化状态
	constructor(props) {
		super(props)
		// 状态
		this.state = {
			data: []
		}
	}
	// 创建列表
	createList() {
		// 通过状态数据创建
		return this.state.data.map((obj, index) => (
			<li key={index}>
				<Link to={'/detail/' + obj.id}>
					<img src={obj.img} alt=""/>
					<div className="content">
						<h3>{obj.title}</h3>
						<p>
							<span>{obj.content}</span>
							<span className="list-comments">{'评论:' + obj.comment}</span>
						</p>
					</div>
				</Link>
			</li>
		))
	}
	render() {
		return (
			<div className="list">
				<ul>{this.createList()}</ul>
			</div>
		)
	}
	// 组件创建完成
	componentDidMount() {
		// console.log(this)
		// 发送请求
		this.ajax('data/list.json', res => {
			if (res.errno === 0) {
				this.setState({
					data: res.data
				})
			}
		})
	}
}