import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  render() {
    var { tasks } = this.props;
    var elementTask = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          onDelete={this.props.onDelete}
          updateStatus={this.props.updateStatus}
          onUpdateTask= {this.props.onUpdateTask}
        />
      );
    });
    return (
      <div className="list">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Name</th>
              <th scope="col">Trạng thái</th>
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{elementTask}</tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
