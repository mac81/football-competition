import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '../actions/userActions';
import styled from 'styled-components';

const StyledLogin = styled.div`
  background: white;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);

  width: 400px;
  padding: 30px;

  input {
    display: block;
    width: 100%;
    border: 2px solid #ecf0f1;
    padding: 15px 20px;
    margin-bottom: 20px;
  }
`;

class Login extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      username: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  login() {
    this.props.userLogin(this.state.username, this.state.password);
  }

  render() {
    return (
      <StyledLogin>
        <label>Username:</label>
        <input name="username" onChange={this.onChange} />
        <label>Password:</label>
        <input type="password" name="password" onChange={this.onChange} />
        <button onClick={this.login}>Login</button>
      </StyledLogin>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userLogin: bindActionCreators(userLogin, dispatch),
});

export default connect(undefined, mapDispatchToProps)(Login);
