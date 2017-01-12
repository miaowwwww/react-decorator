import React, { PureComponent, PropTypes } from 'react';

// 搜索输入框
export default class SearchInput extends PureComponent {
	static propTypes = {
		keyword: PropTypes.string,
		changeKeyword: PropTypes.func
	}
	static needProps = ['keyword', 'changeKeyword']
	render() {
		const { keyword, changeKeyword } = this.props;
		return (
			<input type='text' 
							value={ keyword } 
							placeholder='请选择....'
							onChange={(e) => changeKeyword(e.target.value) } />
		)
	}
}
