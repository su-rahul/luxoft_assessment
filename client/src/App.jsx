import React from 'react';
import { withSnackbar } from 'react-simple-snackbar'

import LoginPage from './container/LoginPage';
import DetailsPage from './container/DetailsPage';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
    }
  }

  login = async (email, password) => {
    const { openSnackbar } = this.props
    try {
      let response = await fetch('http://localhost:3010/login', {
        method: 'POST',
        referrerPolicy: 'no-referrer',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      response = await response.json();
      if (response[0].role === 'EMPLOYEE') {
        this.setState({
          users: response,
        });
      } else {
        const allUsers = await fetch('http://localhost:3010/users', {
          method: 'GET',
        }).then(res => res.json());

        this.setState({
          users: allUsers,
        });
      }
    } catch (error) {
      console.log(error);
      openSnackbar('Invalid Credentials!', 2000);
    }
  }

  render () {
    return (
      <div className="App">
        {!this.state.users.length &&
          <LoginPage login={this.login} />
        }
        {!!this.state.users.length &&
          <DetailsPage
            users={this.state.users}
          />
        }
      </div>
    );
  }
}

export default withSnackbar(App, {
  position: 'top-center',
  style: {backgroundColor: 'red'}
});
