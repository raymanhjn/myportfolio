import React, {Component} from 'react';
import { connect } from 'react-redux';
import {openModal} from '../actions/modal_actions';

class PortofolioItem extends Component {

	constructor(props) {
		super(props);
		this.modalOpen = this.modalOpen.bind(this);
	}

	modalOpen() {
		this.props.openModal();
	}

	render() {
		return (
			<div className='col-xs-12 col-sm-6 col-md-4'>
				<div className='portofolio-item'>
					<div className='caption' onClick={this.modalOpen}>
				    	<div className='caption-content'>
				    		<i className='fa fa-search-plus fa-3x'></i>
				    	</div>
				    </div>
					<img src={this.props.image_url} className="img-rounded img-responsive" />
				</div>
			</div>
		);
	}	
}

export default connect(null, {openModal})(PortofolioItem);