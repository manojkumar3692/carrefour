import React,{PureComponent} from  'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom'
import "./Header.css";
export default class Header extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			initialSearch:false
		}
	}

	showFullWidth() {
		this.setState({initialSearch:true})
	}

	render() {
		return (
			<div className="header">
				<Row>
					<Col xs={12} md={8} >
						<img src={require('../../assets/images/CarrefourLogo.png')}/>
					</Col>
					<Col xs={4} classname="headerRight">
						<div className="searchBox">
							<img src={require('../../assets/images/search.png')}/>
							<input onFocus={this.showFullWidth.bind(this)} className={this.state.initialSearch ? 'fullWidthSearch':'defaultSearch'} type="text"/>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}