import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userRegister} from '../actions/userActions';

class Register extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      username: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.register = this.register.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  register() {
    this.props.userRegister(this.state.username, this.state.password);
  }

  render() {
    return (
      <div>
        <input name="username" onChange={this.onChange} />
        <input type="password" name="password" onChange={this.onChange} />
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userRegister: bindActionCreators(userRegister, dispatch),
});

export default connect(undefined, mapDispatchToProps)(Register);
