import * as React from 'react';
import { Link } from "react-router-dom";
import { Util } from "../../mixins/util.jsx";
import * as detailLess from "./detail.less"

export class Detail extends Util {
	/*初始化状态*/
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			data: {}
		}
	}
	render() {
		// 缓存数据
		let data = this.state.data;
		return (
			<div className="detail">
				<h1>{data.title}</h1>
				<p className="status">
					<span>{data.time}</span>
					<span className="detail-comments">{"评论数:" + data.comment}</span>
				</p>
				<img src={data.img} alt=""/>
				<p className="content" dangerouslySetInnerHTML={{
					__html: data.content
				}}></p>
				<Link to={'/comments/' + data.id} className="btn">查看更多评论</Link>
			</div>
		)
	}
	// 组件创建完成，发送异步请求
	componentDidMount() {
		// 拉取数据
		this.ajax('data/detail.json?id=' + this.props.match.params.id, res => {
			// 如果请求成功，存储数据
			if (res && res.errno === 0) {
				// 更新状态
				this.setState({
					data: res.data
				})
			}
		})
	}
}