import React, { PureComponent, PropTypes } from 'react';
import { render } from 'react-dom';

import Search from './highOrderComponents/Search';


render(
	<Search />, 
	document.body.appendChild(document.createElement('div'))
);

