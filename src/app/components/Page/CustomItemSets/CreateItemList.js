import React, { useState } from "react";
import { Space, Switch, Table, Tag, Transfer } from "antd";

// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
	<Transfer {...restProps}>
		{({
			direction,
			filteredItems,
			onItemSelect,
			onItemSelectAll,
			selectedKeys: listSelectedKeys,
			disabled: listDisabled,
		}) => {
			const columns = direction === "left" ? leftColumns : rightColumns;
			const rowSelection = {
				getCheckboxProps: () => ({
					disabled: listDisabled,
				}),
				onChange(selectedRowKeys) {
					onItemSelectAll(selectedRowKeys, "replace");
				},
				selectedRowKeys: listSelectedKeys,
				selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
			};
            
			return (
				<Table
					rowSelection={rowSelection}
					columns={columns}
					dataSource={filteredItems}
					size="small"
					style={{
						pointerEvents: listDisabled ? "none" : undefined,
					}}
					onRow={({ key, disabled: itemDisabled }) => ({
						onClick: () => {
							if (itemDisabled || listDisabled) {
								return;
							}
							onItemSelect(key, !listSelectedKeys.includes(key));
						},
					})}
				/>
			);
		}}
	</Transfer>
);

const mockTags = ["cat", "dog", "bird"];
const mockData = Array.from({
	length: 20,
}).map((_, i) => ({
	key: i.toString(),
	title: `content${i + 1}`,
	description: `description of content${i + 1}`,
	tag: mockTags[i % 3],
}));

const columns = [
	{
		dataIndex: "title",
		title: "Name",
	},
	{
		dataIndex: "tag",
		title: "Tag",
		render: (tag) => (
			<Tag
				style={{
					marginInlineEnd: 0,
				}}
				color="cyan"
			>
				{tag.toUpperCase()}
			</Tag>
		),
	},
	{
		dataIndex: "description",
		title: "Description",
	},
];

export function CreateItemList() {
	const [targetKeys, setTargetKeys] = useState([]);
	const [disabled, setDisabled] = useState(false);

	const onChange = (nextTargetKeys) => {
		setTargetKeys(nextTargetKeys);
	};

	const toggleDisabled = (checked) => {
		setDisabled(checked);
	};

	return (
		<>
			<TableTransfer
				dataSource={mockData}
				targetKeys={targetKeys}
				disabled={disabled}
				showSearch
				showSelectAll={false}
				onChange={onChange}
				filterOption={(inputValue, item) =>
					item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
				}
				leftColumns={columns}
				rightColumns={columns}
			/>
			<Space
				style={{
					marginTop: 16,
				}}
			>
				<Switch
					unCheckedChildren="disabled"
					checkedChildren="disabled"
					checked={disabled}
					onChange={toggleDisabled}
				/>
			</Space>
		</>
	);
};