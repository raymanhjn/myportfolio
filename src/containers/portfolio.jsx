import React, { Component} from 'react';
import PortofolioItem	 from '../components/portfolio_item';

export default class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.images = [{
		image_url : 'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cabin.png',
	},{
		image_url : 'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cake.png',
	},{
		image_url : 'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/circus.png',
	},{
		image_url : 'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/game.png',
	},{
		image_url : 'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/safe.png',
	},{
		image_url : 'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/submarine.png',
	}];
		this.renderImage = this.renderImage.bind(this);
	}

	renderImage() {
		return this.images.map((image) => {
			return <PortofolioItem	key={image.image_url} image_url={image.image_url}/>
		});
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					{this.renderImage()}
				</div>
			</div>
		);
	}
}