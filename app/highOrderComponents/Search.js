import React, { PureComponent, PropTypes } from 'react';

import SearchInput from '../components/SearchINput';
import TipText from '../components/TipText';
import List from '../components/List';
import searchDecorator from '../decorators/searchDecorator';

import Selector from '../Selector';

@searchDecorator
export default class Search extends PureComponent {
	render() {
		return (
			<Selector {...this.props}>
				<SearchInput />
				<TipText />
				<List />
			</Selector>
		)
	}
}

// export default Search;