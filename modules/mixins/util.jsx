import { Component } from "react";

// 定义混合类，实现ajax方法
export class Util extends Component {
	// 实现ajax方法
	ajax(url, fn) {
		// 创建小黄人
		let xhr = new XMLHttpRequest();
		// 监听事件
		xhr.onreadystatechange = () => {
			// 监听状态的改变
			if (xhr.readyState === 4) {
				// 监听状态码
				if (xhr.status === 200) {
					// 执行fn,并传递数据
					fn(JSON.parse(xhr.responseText))
				}
			}
		}
		// 打开请求
		xhr.open('GET', url, true);
		// 发送数据
		xhr.send(null)
	}
	/**
	 * 实现将对象转换成Query
	 * @obj 	参数对象
	 * return 	query
	 * eg: {a: 1, b: 2, c: 3}  => ?a=1&b=2&c=3
	 **/ 
	ObjectToQuery(obj) {
		let result = '';
		// 解析obj
		for (let i in obj) {
			// i表示key， obj[i]表示value
			result += '&' + encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
		}
		// 返回结果, 以?开头而不是&
		return result.replace('&', '?')
	}
}