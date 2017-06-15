import React, {Component} from 'react';

import Intro from './intro';
import Portfolio from '../containers/portfolio';


export default class Content extends Component {
	render() {
		return (
			<div>
				<Intro />
				<Portfolio />
			</div>
		);
	}

}