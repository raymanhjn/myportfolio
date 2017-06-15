import React from 'react';

export default ({image_url}) =>{

	return (
		<div className='col-xs-12 col-sm-6 col-md-4'>
			<div className='portofolio-item'>
				<div className='caption'>
			    	<div className='caption-content'>
			    		<i className='fa fa-search-plus fa-3x'></i>
			    	</div>
			    </div>
				<img src={image_url} className="img-rounded img-responsive" />
			</div>
		</div>
	);
}