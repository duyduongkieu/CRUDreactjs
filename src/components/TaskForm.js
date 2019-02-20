import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { isFulfilled } from 'q';
class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    };
  }
  //   componentWillMount = () => {
  //     if (this.props.edit) {
  //       this.setState({
  //         id: this.props.edit.id,
  //         name: this.props.edit.name,
  //         status: this.props.edit.status
  //       });
  //     }
  //   };
  componentWillMount = () => {
    if (this.props.edit) {
      this.setState({
        id: this.props.edit.id,
        name: this.props.edit.name,
        status: this.props.edit.status
      });
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.edit) {
      this.setState({
        id: nextProps.edit.id,
        name: nextProps.edit.name,
        status: nextProps.edit.status
      });
    } else if (!nextProps.edit) {
      this.setState({
        id: '',
        name: '',
        status: false
      });
    }
  }
  onHandelChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]: value
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
      status: false
    });
  };
  render() {
    var { id } = this.state;
    return (
      <div className="form">
        <div className="d-flex justify-content-left">
          <Button type="primary" onClick={this.props.showModal}>
            Thêm mới
          </Button>
          <Modal
            title={id !== '' ? 'Cập nhật' : 'Thêm phim'}
            // title="The moi"
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
                  <option defaultValue>Chọn trạng thái</option>
                  <option value={true}>Hiển thị</option>
                  <option value={false}>Ẩn</option>
                </select>
              </div>
              <button className="btn btn-success" type="submit">
               {id ? 'Cập nhật': ' Lưu lại'}
              </button>
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default TaskForm;
