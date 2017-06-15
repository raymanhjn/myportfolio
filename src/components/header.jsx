import React from 'react';

export default ({small}) => {
		return (
			<nav className={`navbar navbar-custom navbar-default navbar-fixed-top ${small?'smallbar':'bigbar'}`}>
		      <div className="container">
		      	<div className='navbar-header'>
		      		<button type='button' className='navbar-toggle'
		      				data-toggle='collapse' data-target='#collapse-menu'>
		      			<i className='fa fa-bars'></i>
		      		</button>
		      		<div className='navbar-brand'>
		      			Jianing
		      		</div>
		      	</div>
		      	<div className='collapse navbar-collapse' id='collapse-menu'>
		      		<ul className="nav navbar-nav navbar-right">
	                    <li className="hidden active">
	                        <a href="#page-top"></a>
	                    </li>
	                    <li className="page-scroll">
	                        <a href="#portfolio">Portfolio</a>
	                    </li>
	                    <li className="page-scroll">
	                        <a href="#about">About</a>
	                    </li>
	                    <li className="page-scroll">
	                        <a href="#contact">Contact</a>
	                    </li>
	                </ul>
		      	</div>
		      </div>
		    </nav>
		);
}



