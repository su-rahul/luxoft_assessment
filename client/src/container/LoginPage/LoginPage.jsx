import React from 'react';

import '../../style.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();

    this.setState({
      [fieldName]: fieldValue,
    });
  }

  handleSubmit = async () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    return (
      <div className="login-wrapper">
        <h1>Login</h1>
        <div className="input-wrapper">
          <div className="label">Email</div>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Enter email"
          />
        </div>
        <div className="input-wrapper">
          <div className="label">Password</div>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className="input-wrapper">
          <button
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default LoginPage;