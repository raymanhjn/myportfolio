import React, { Component} from 'react';
import PortofolioItem from '../components/portfolio_item';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import {openModal,closeModal} from '../actions/modal_actions';

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
		this.renderImage = this.renderImage.bind(this);
		this.modalClose = this.modalClose.bind(this);
	}

	renderImage() {
		return this.images.map((image) => {
			return <PortofolioItem	
					key={image.image_url} 
					image_url={image.image_url}/>
		});
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
				<Modal
			        isOpen={this.props.modalIsOpen}
			        contentLabel="Example Modal"
			    >
			        <button onClick={this.modalClose}>close</button>
			        <div>I am a modal</div>
			    </Modal>
			</div>
		);
	}
}

function mapStateToProps({modal}){
	return {
		modalIsOpen: modal.modalIsOpen,
	};
}

export default connect(mapStateToProps,{ openModal, closeModal })(Portfolio);