import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

class TaskSort extends Component {
  handleMenuClick = e => {
    message.info('Click on menu item.');
  };
  onClick = (sortName, sortStatus) => {
    this.props.onSort(sortName, sortStatus);
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={() => this.onClick('name', 1)}>
          <Icon type="sort-ascending" /> Tên A-Z
          {this.props.sortName === 'name' && this.props.sortStatus === 1 ? (
            <Icon className="ml-2 font-weight-bold" type="check" />
          ) : (
            ''
          )}
        </Menu.Item>
        <Menu.Item onClick={() => this.onClick('name', -1)}>
          <Icon type="sort-descending" /> Tên Z-A
          {this.props.sortName === 'name' && this.props.sortStatus === -1 ? (
            <Icon className="ml-2 font-weight-bold" type="check" />
          ) : (
            ''
          )}
        </Menu.Item>
        <Menu.Item onClick={() => this.onClick('status', 1)}>
          Kích hoạt
          {this.props.sortName === 'status' && this.props.sortStatus === 1 ? (
            <Icon className="ml-2 font-weight-bold" type="check" />
          ) : (
            ''
          )}
        </Menu.Item>
        <Menu.Item onClick={() => this.onClick('status', -1)}>
          Trạng thái ẩn
          {this.props.sortName === 'status' && this.props.sortStatus === -1 ? (
            <Icon className="ml-2 font-weight-bold" type="check" />
          ) : (
            ''
          )}
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Dropdown overlay={menu}>
          <Button style={{ marginLeft: 8 }}>
            Sắp xếp <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    );
  }
}

export default TaskSort;
