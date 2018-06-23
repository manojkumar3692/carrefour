import React,{PureComponent} from "react";
import { Row, Col } from 'react-flexbox-grid';
import signupStyle from "./SignIn.css";
import Header from "../../common/Header/Header";
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
import productImage from "../../assets/images/Layer.png";
import authenticationAPI from "../../networking/AuthenticationAPI";
export default class SignIn extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			submittedValues:[],
			showLabel:false,
			productList:[
				{
					id:"1",
					productName:'Iphone 7 Black',
					price:"AED 700",
					image:'../../assets/images/CarrefourLogo.png'
				},
				{
					id:"2",
					productName:'Iphone 8 Gold',
					price:"AED 800",
					image:'../../assets/images/CarrefourLogo.png'
				},
				{
					id:"3",
					productName:'Iphone 6 Blue',
					price:"AED 900",
					image:'../../assets/images/CarrefourLogo.png'
				}

			]
		}

	}

	submitForm(value,e,c) {
		if(value.username === 'admin' && value.password === 'password') {
			authenticationAPI.loginUser(value)
				.then((response) => {
					alert('All Set , Cheers')
				})
				.catch((error) => {
					alert('Opps Error')
				})
		}else {
			this.setState({showLabel:true})
		}
	}

	focus(event) {
		this.setState({showLabel:true})
	}

	render() {
		return (
			<div>
				<Header/>
				<div>
					<div className="signUp">
						<div className="signUp__title">
							<h1>Sign In Now</h1>
							<h2>Unlock awesome features</h2>
						</div>
						<div className="signUp__inputField">
							<Form onSubmit={this.submitForm.bind(this)}>
								{formApi => (
									<form onSubmit={formApi.submitForm} id="form2">
										<div className="signUp__group">
											<div className={this.state.showLabel ? 'showErrorMessage':'hideErrorMessage'}>
												<h1>Required field</h1>
											</div>
										<label className={this.state.showLabel ? 'hideUsername' : ''} htmlFor="username">Username</label>
										<Text className={this.state.showLabel && 'showError'} field="username" id="username" placeholder="username" />
										</div>
										<div className="signUp__groupOdd">
											<div className={this.state.showLabel ? 'showErrorMessagePassword':'hideErrorMessage'}>
												<h1>Required field</h1>
											</div>
										<Text className={this.state.showLabel && 'showError'} field="password" type="password" id="password" placeholder="password" />
										</div>
										<div className="checkbox">
											<label className="container">Keep me logged in
												<input checked="true" type="checkbox"/>
													<span className="checkmark"></span>
											</label>
										</div>
										<h1>Forgot password?</h1>
										<div className="formAction">
											<button>
												SIGN IN
											</button>
										</div>

									</form>
								)}
							</Form>
						</div>
					</div>
				</div>
				<div className="listing">
					<Row around="xs" className="listing__border">
						{
							this.state.productList.map((item,index) => {
								return (
									<Col key={index} xs={12} lg={3} >
										<div className="listing__image">
											<img src={productImage}/>
										</div>
										<h1>{item.productName}</h1>
										<h2>{item.price}</h2>
									</Col>

								)
							})
						}
					</Row>
				</div>
			</div>
		)
	}
}