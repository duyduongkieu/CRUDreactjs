import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

class TaskSort extends Component {
	handleMenuClick = e => {
		message.info('Click on menu item.');
	};
	render() {
		const menu = (
			<Menu>
				<Menu.Item>
					<Icon type="sort-ascending" /> Tên A-Z
				</Menu.Item>
				<Menu.Item>
					<Icon type="sort-descending" /> Tên Z-A
				</Menu.Item>
				<Menu.Item>Kích hoạt</Menu.Item>
				<Menu.Item>Trạng thái ẩn</Menu.Item>
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
