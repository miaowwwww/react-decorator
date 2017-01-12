import React, { PureComponent, PropTypes } from 'react';


const searchDecorator = Wrapper => {
	class WrapperComponent extends PureComponent {
		constructor(props) {
			super(props);
			this.state = { keyword: '' };
		}
		handleOnChange = (kw) => {
			this.setState({keyword: kw })
		}
		render() {
			const { keyword } = this.state;
			const listArr = ['react', 'redux', 'react-router'];
			const listdata = listArr.filter( (item) => 
				item.indexOf( keyword ) > -1
			) 

			return (
				<Wrapper {...this.props}
								 keyword={ keyword }
								 changeKeyword={ this.handleOnChange }
								 list={listdata} />
			)
		}
	}
	return WrapperComponent
}

export default searchDecorator;
