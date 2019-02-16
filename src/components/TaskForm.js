import React, { Component } from 'react';
import { Modal, Button } from 'antd';
class TaskForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			status: false,
		};
	}
	onHandelChange = e => {
		var target = e.target;
		var name = target.name;
		var value = target.value;
		if (name === 'status') {
			value = target.value === 'true' ? true : false;
		}
		this.setState({
			[name]: value,
		});
	};
	onHandelSubmit = e => {
		e.preventDefault();
		this.props.onHandelSubmit(this.state);
		this.onClear();
	};
	onClear = () => {
		this.setState({
			name: '',
			status: false,
		});
	};
	render() {
		return (
			<div className="form">
				<div className="d-flex justify-content-left">
					<Button type="primary" onClick={this.props.showModal}>
						Thêm mới
					</Button>
					<Modal
						title="Basic Modal"
						visible={this.props.visible}
						onOk={this.props.handleOk}
						onCancel={this.props.handleCancel}
					>
						<form onSubmit={this.onHandelSubmit}>
							<div className="form-group">
								<label>Tên phim</label>
								<input
									className="form-control"
									name="name"
									value={this.state.name}
									onChange={this.onHandelChange}
								/>
							</div>
							<div className="form-group">
								<label>Trạng thái</label>
								<select
									className="form-control"
									name="status"
									value={this.state.status}
									onChange={this.onHandelChange}
								>
									<option value={true}>Hiển thị</option>
									<option value={false}>Ẩn</option>
								</select>
							</div>
							<button className="btn btn-success" type="submit">
								Lưu lại
							</button>
						</form>
					</Modal>
				</div>
			</div>
		);
	}
}

export default TaskForm;
