import React, { Component } from 'react';
import { Popconfirm, message } from 'antd';

class TaskItem extends Component {
  // update status
  updateStatus = () => {
    this.props.updateStatus(this.props.task.id);
  };
  //   ..delete
  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };
  confirm = e => {
    this.onDelete();
    message.success('Delete');
  };
  //   .....update
  onUpdateTask = () => {
      this.props.onUpdateTask(this.props.task.id);
  }
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td className="font-weight-bold">{task.name}</td>
        <td>
          <span
            onClick={this.updateStatus}
            className={task.status === true ? 'classTrue' : 'classFalse'}
          >
            {task.status === true ? 'Hiển thị' : 'Ẩn'}
          </span>
        </td>
        <td>
          <button className="btn btn-primary" onClick={this.onUpdateTask}>
            Sửa
          </button>
          <Popconfirm
            title="Are you sure delete this task?"
            onConfirm={this.confirm}
            okText="Yes"
            cancelText="No"
          >
            <button className="btn btn-danger">Xóa</button>
          </Popconfirm>
          ,
        </td>
      </tr>
    );
  }
}

export default TaskItem;
