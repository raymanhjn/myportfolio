import React, { Component} from 'react';
import PortofolioItem from '../components/portfolio_item';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import {openModal,closeModal} from '../actions/modal_actions';
import PortfolioModal from '../components/portfolio_modal';

class Portfolio extends Component {
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

		this.modalContent=[{name:'react-guoku',
							image_url:'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cabin.png',
						    description:'this is a simple react application of react-redux'},
						    {name:'react-guoku',
							image_url:'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/cake.png',
						    description:'this is a simple react application of react-redux'},
						    {name:'react-guoku',
							image_url:'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/circus.png',
						    description:'this is a simple react application of react-redux'},
						    {name:'react-guoku',
							image_url:'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/game.png',
						    description:'this is a simple react application of react-redux'},
						    {name:'react-guoku',
							image_url:'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/safe.png',
						    description:'this is a simple react application of react-redux'},
						    {name:'react-guoku',
							image_url:'https://blackrockdigital.github.io/startbootstrap-freelancer/img/portfolio/submarine.png',
						    description:'this is a simple react application of react-redux'},];
		this.renderImage = this.renderImage.bind(this);
		this.modalClose = this.modalClose.bind(this);
		this.modalOpen = this.modalOpen.bind(this);
	}

	renderImage() {
		return this.images.map((image,index) => {
			return <PortofolioItem	
					key={index} 
					image_url={image.image_url}
					openModal={this.modalOpen}
					modalContent={this.modalContent[index]}/>
		});
	}

	modalOpen(content) {
		this.props.openModal(content);
	}

	modalClose() {
		this.props.closeModal();
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					{this.renderImage()}
				</div>
				<PortfolioModal 
					modalIsOpen={this.props.modalIsOpen}
					modalClose={this.modalClose}
					modalContent={this.props.modalContent}/>
			</div>
		);
	}
}

function mapStateToProps({modal}){
	return {
		modalIsOpen: modal.modalIsOpen,
		modalContent:modal.modalContent,
	};
}

export default connect(mapStateToProps,{ openModal, closeModal })(Portfolio);