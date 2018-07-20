import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import signIn from '../services/axios_service';

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const {signInUser} = this.props;
    const {
      email,
      password,
    } = this.state;
    await signInUser({email, password}).
      then(() => {
        const customHeaders = {
          access_token: localStorage.getItem("access-token"),
          client: localStorage.getItem("client"),
          token_type: localStorage.getItem("token-type"),
          uid: localStorage.getItem("uid"),
        };
        console.log("customHeaders: " + JSON.stringify(customHeaders));
      }
    );

    this.setState({ redirect: true })
  };

  // Using AXIOS
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const {
  //     email,
  //     password,
  //   } = this.state;
  //   signIn(email, password);
  //   this.setState({ redirect: true })
  // };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    })
    console.log("this state: " + JSON.stringify(this.state));
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/'/>;
    }

    return (
      <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
          <h1 className="text-center login-title">Sign in to DLZones</h1>
          <div className="account-wall">
            <img className="profile-img"
                 src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                 alt=""/>
            <form className="form-signin" onSubmit={this.handleSubmit}>
              <input onChange={this.handleInputChange} name="email" type="text" className="form-control" placeholder="Email"  autoComplete="email" required/>
              <input onChange={this.handleInputChange} name="password" type="password" className="form-control" placeholder="Password" autoComplete="current-password" required/>
              <button className="btn btn-lg btn-primary btn-block" type="submit">
                Sign in
              </button>
              <label className="checkbox pull-left">
                <input type="checkbox" value="remember-me"/>
                Remember me
              </label>
              <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"/>
            </form>
          </div>
          <a href="#" className="text-center new-account">Create an account </a>
        </div>
      </div>
    );
  }
}
export default SignIn;
