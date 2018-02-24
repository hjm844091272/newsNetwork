import * as React from 'react';
import { Util } from '../../mixins/util.jsx';
import * as commentsLess from './comments.less'


export class Comments extends Util {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			list: [],
			id: 0
		}
	}
	// 创建评论列表
	createList() {
		return this.state.list.map((obj, index) => (
			<li key={index}>
				<h3>{obj.user}</h3>
				<p>{obj.content}</p>
				<span>{obj.time}</span>
			</li>
		))
	}
	// 点击提交按钮，提交评论
	submitData() {
		// 1 绑定事件
		// 2 获取输入框的内容 我们实现非约束性组件，练习时候，实现约束性组件
		let value = this.refs.userInput.value;
		// 3 脏值检测，是否合法，
		if (/\S+/.test(value)) {
			// 创建提交数据
			let date = new Date();
			let userData = {
				content: value,
				user: '前端大神·JMh',
				time: '刚刚 ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
			}
			// 合法，继续进行
			this.ajax('data/addComment.json' + this.ObjectToQuery(userData), res => {
				// 请求成功
				if (res && res.errno === 0) {
					// 4 发送请求，通知服务器
					let list = this.state.list;
					// 前面插入数据
					list.unshift(userData);
					// 5 收到返回结果，渲染数据
					this.setState({
						list: list
					})
					// 6 清空输入框
					this.refs.userInput.value = '';
				}
			})
		} else {
			// 不合法停止执行，提示用户
			alert('输入的不合法')
		}
	}
	render() {
		return (
			<div className="commnets">
				<div className="box">
					<textarea placeholder="文明上网，理性发言！" ref="userInput"></textarea>
					<span className="btn" onClick={this.submitData.bind(this)}>提交</span>
				</div>
				<ul>{this.createList()}</ul>
			</div>
		)
	}
	// 组件创建完成，发送请求
	componentDidMount() {
		// 发送请求
		this.ajax('data/comment.json?id=' + this.props.match.params.id, res => {
			if (res && res.errno === 0 && res.data) {
				// 更新状态，存储数据
				this.setState({
					list: res.data.list,
					id: res.data.id
				})
			}
		})
	}
}