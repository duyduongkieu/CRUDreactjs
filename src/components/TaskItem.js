import React, { Component } from 'react';
class TaskItem extends Component {
	render() {
		var { task, index } = this.props;
		return (
			<tr>
				<th scope="row">{index + 1}</th>
				<td>{task.name}</td>
				<td>
					<span className={task.status == true ? 'classTrue' : 'classFalse'}>
						{task.status == true ? 'Hiển thị' : 'Ẩn'}
					</span>
				</td>
				<td>
					<div>
						<button className="btn btn-primary">Sửa</button>
					</div>
					<div>
						<button className="btn btn-danger">Xóa</button>
					</div>
				</td>
			</tr>
		);
	}
}

export default TaskItem;
