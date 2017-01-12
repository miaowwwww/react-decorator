import React, { PureComponent, PropTypes } from 'react';

class Selector extends PureComponent {
	addProps = (item, index) => {
		const { needProps = [] } = item.type;
		const injectProps = needProps.reduce((obj, value) => {
			obj[value] = this.props[value];
			return obj;
		}, {key: index});
		return React.cloneElement(item, injectProps);
	}
	clone = (children) => {
		return children.map(this.addProps)
	} 	
	render() {
		return (
			<div>
				{ this.clone(this.props.children)}
			</div>
		)
	}
}

export default Selector;
