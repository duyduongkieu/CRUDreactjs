import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskSort from './components/TaskSort';
import TaskSearch from './components/TaskSearch';
import { v4 as uuid } from 'uuid';

import './App.css';
import 'antd/dist/antd.css';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			visible: false,
		};
	}
	// ....................modal
	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = e => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};
	// ...................form
	onHandelSubmit = data => {
		var { tasks } = this.state;
		data.id = uuid();
		console.log(data);
		tasks.push(data);
		this.setState({
			tasks: tasks,
		});
		localStorage.setItem('tasks', JSON.stringify(tasks));
	};
	// .........compnentWillMount
	componentWillMount() {
		if (localStorage && localStorage.getItem('tasks')) {
			var tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks: tasks,
			});
		}
	}
	render() {
		var { visible, tasks } = this.state;
		return (
			<div className="App container my-2">
				<TaskForm
					visible={visible}
					showModal={this.showModal}
					handleOk={this.handleOk}
					handleCancel={this.handleCancel}
					onHandelSubmit={this.onHandelSubmit}
				/>
				<div className="row my-2">
					<div className="col-md-6">
						<TaskSearch />
					</div>
					<div className="col-md-4">
						<TaskSort />
					</div>
				</div>
				<TaskList tasks={tasks} />
			</div>
		);
	}
}

export default App;
