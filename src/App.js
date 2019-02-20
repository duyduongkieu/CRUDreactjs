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
      edit: '',
      keyword: '',
      sortName: 'name',
      sortStatus: 1
    };
  }
  // ....................modal
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      edit: ''
    });
  };
  // ...................form
  onHandelSubmit = data => {
    var { tasks } = this.state;
   if(data.id === '') {
    data.id = uuid();
    tasks.push(data);
   } else {
       var index = this.fillIndex(data.id);
       tasks[index] = data;
   }
    this.setState({
      tasks: tasks,
      edit: ''
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.handleCancel();
  };
  // .........compnentWillMount
  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }
  //   ..............updateStatus
  updateStatus = id => {
    var { tasks } = this.state;
    var index = this.fillIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  };
  //   .........delete
  fillIndex = id => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };
  onDelete = id => {
    var { tasks } = this.state;
    var index = this.fillIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  };
  //   ........update
onUpdateTask = (id) => {
    var {tasks} = this.state;
    var index = this.fillIndex(id);
    var edit = tasks[index];
    this.setState({
        edit: edit
    });
    console.log(edit);
    this.showModal();
    console.log(this.state);
}
  // .............search
  onSearch = keyword => {
    this.setState({
      keyword: keyword
    });
  };
  //   .......onSort
  onSort = (sortName, sortStatus) => {
    this.setState({
      sortName: sortName,
      sortStatus: sortStatus
    });
  };
  render() {
    var { visible, tasks, edit, keyword, sortName, sortStatus } = this.state;
    if (keyword) {
      tasks = tasks.filter(task => {
        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }
    if (sortName == 'name') {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortStatus;
        if (a.name < b.name) return -sortStatus;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortStatus;
        else if (a.status < b.status) return sortStatus;
        else return 0;
      });
    }
    return (
      <div className="App container my-2">
        <h1 className="text-center">Quản lí công phim người lớn</h1>
        <TaskForm
          visible={visible}
          showModal={this.showModal}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
          onHandelSubmit={this.onHandelSubmit}
          edit={edit}
        />
        <div className="row my-2">
          <div className="col-md-6">
            <TaskSearch onSearch={this.onSearch} />
          </div>
          <div className="col-md-4">
            <TaskSort
              onSort={this.onSort}
              sortName={sortName}
              sortStatus={sortStatus}
            />
          </div>
        </div>
        <TaskList
          tasks={tasks}
          onDelete={this.onDelete}
          updateStatus={this.updateStatus}
          onUpdateTask ={this.onUpdateTask}
        />
      </div>
    );
  }
}

export default App;
