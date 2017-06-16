import React from 'react';
import Modal from 'react-modal';

export default (props) => {
	
	return (
		<Modal
			isOpen={props.modalIsOpen}
			contentLabel="Modal"
			onRequestClose={props.modalClose}
			className={{
				base:'myModal',
				afterOpen: 'myModal_after-open',
			}}
			style={{
              overlay: {
                zIndex:100
              }
            }}
			>
			    <a className='modal-close' onClick={props.modalClose}><i className="fa fa-times" aria-hidden="true"></i></a>
			    <div className='container'>
			    	<h1>{props.modalContent.name}</h1>
				    <img className='img-thumbnail' src={props.modalContent.image_url} />
				    <h2>{props.modalContent.description}</h2>
			    </div>
			    
		</Modal>
	);
}