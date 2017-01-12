import React, { PureComponent, PropTypes } from 'react';


// 提示语
export default class TipText extends PureComponent {
	render() {
		const { text='这是一个组合式的search组件' } = this.props;
		return (
			<p>{ text }</p>
		)
	} 
}
// export default TipText;
// 因为没有设置 static needProps, 所以不会接收到this.props.text