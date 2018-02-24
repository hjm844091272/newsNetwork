// 引入模块
import * as React from "react"
import { HashRouter } from "react-router-dom";
import { App } from "../app/app.jsx";

// 定义路由规则
export const routes = (
	<HashRouter>
		<App></App>
	</HashRouter>
)