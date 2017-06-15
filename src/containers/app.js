import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from '../components/header';
import Content from '../components/content';

import {toggleNavbar} from '../actions/navbar_action';


class App extends Component {

	constructor(props) {
		super(props);
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleScroll(event) {
	    let scrollTop = document.body.scrollTop;
	    if(scrollTop < this.props.lastTop && this.props.small) {
	    	this.props.toggleNavbar({
	    		lastTop:document.body.scrollTop,
				small:false,
	    	});
	    }else if(scrollTop > this.props.lastTop && !this.props.small){
	    	this.props.toggleNavbar({
	    		lastTop:document.body.scrollTop,
				small:true,
	    	});
	    }
	    this.setState({
	    	lastTop:scrollTop
	    });
	}

	componentWillMount() {
		this.props.toggleNavbar({
			lastTop:document.body.scrollTop,
			small:false,
		});
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	 
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	render() {
		let {small} =this.props;
	    return (
	      <div>
	      	<Header small={small}/>
	      	<Content />
	      </div>
	    );
	}
}

function mapStateToProps({navbar}) {
	return {
		lastTop: navbar.lastTop,
		small: navbar.small,
	};
}

export default connect(mapStateToProps,{toggleNavbar})(App);