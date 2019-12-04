import React from 'react';
//HashRouter,支持#识别,http://localhost:8080/#/Page3/
import { HashRouter as Router, Route } from 'react-router-dom';

import axios from "axios";


//单页BrowserRouter
//import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Child from './Child';
import TodoList from './TodoList';
import Stateless from './stateless'
import Mixcom from './mixCom'

React.Component.prototype.axios = axios;
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: "这是父级的state变量",
			name: "fahter",
			age: "55"
		}
	}
	callback = (msg, name, age) => {
		this.setState({ msg });
		this.setState({ name });
		this.setState({ age });
	}
	render() {
		return (
			<Router >
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/Page1/:name" component={Page1} />
					<Route path="/Page2" component={Page2} />
					<Route path="/Page3" component={Page3} />
					<Route path="/Page4" component={Page4} />
					<Route path="/Page5" component={Page5} />
					<Route path="/TodoList" component={TodoList} />
					<Route path="/mixCom" component={Mixcom} />
					<h1>Message：{this.state.msg}</h1>
					<Child callback={this.callback} age={this.state.age} name={this.state.name} />
					<Stateless name ="我是一个无状态组件"></Stateless>
				</div>

			</Router>
		)

	}
}
export default App;
