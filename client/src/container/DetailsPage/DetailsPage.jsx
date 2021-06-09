import React from 'react';

import '../../style.css';

const SingleUserView = ({userDetail}) => (
  <div className="details-container">
    <h1>Profile</h1>
    <div className="row">
      <div>Name:</div>
      <div>{userDetail.name}</div>
    </div>
    <div className="row">
      <div>Email:</div>
      <div>{userDetail.email}</div>
    </div>
    <div className="row">
      <div>Role:</div>
      <div>{userDetail.role}</div>
    </div>
  </div>
);

const MultipleUserView = ({users}) => (
  <div>
    <div className="details-wrapper">
      <h1>User Details</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {users.map(user => (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </table>
    </div>
  </div>
);

const DetailsPage = ({users}) => (
  <>
    {users.length === 1 &&
      <SingleUserView
        userDetail={users[0]}
      />
    }
    {users.length > 1 &&
      <MultipleUserView
        users={users}
      />
    }
  </>
);

export default DetailsPage;