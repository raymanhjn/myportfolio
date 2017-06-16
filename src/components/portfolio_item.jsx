import React, {Component} from 'react';
import { connect } from 'react-redux';
import {openModal} from '../actions/modal_actions';

export default ({openModal,image_url,modalContent}) => {
	let open =()=> {
		openModal(modalContent);
	}
	
	return (
			<div className='col-xs-12 col-sm-6 col-md-4'>
				<div className='portofolio-item'>
					<div className='caption' onClick={open}>
				    	<div className='caption-content'>
				    		<i className='fa fa-search-plus fa-3x'></i>
				    	</div>
				    </div>
					<img src={image_url} className="img-rounded img-responsive" />
				</div>
			</div>
		);
}