import React, { PureComponent, PropTypes } from 'react';

// 列表:无状态组件
const List = (props) => {
	const { list } = props;
	return (
		<ul>
			{ list.map(item => <li key={item} > {item} </li>) }
		</ul>
	)
}
List.propTypes = {
	list: PropTypes.array
}
List.needProps = ['list'];

export default List;