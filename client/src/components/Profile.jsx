import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="row profile">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Will Nguyen</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-3 col-lg-3 " align="center">
                <img alt="User Pic" src="https://scontent.fsgn1-1.fna.fbcdn.net/v/t1.0-9/31091933_1740631312671365_136425464609071646_n.jpg?_nc_cat=0&oh=d8fef215f54067d07692d01a567cb5d4&oe=5BDB145D" className="img-circle img-responsive" />
              </div>

              <div className=" col-md-9 col-lg-9 ">
                <table className="table table-user-information">
                  <tbody>
                    <tr>
                      <td>Department:</td>
                      <td>Programming</td>
                    </tr>
                    <tr>
                      <td>Hire date:</td>
                      <td>06/23/2013</td>
                    </tr>
                    <tr>
                      <td>Date of Birth</td>
                      <td>08/06/1990</td>
                    </tr>

                    <tr>
                      <td>Gender</td>
                      <td>Male</td>
                    </tr>
                    <tr>
                      <td>Home Address</td>
                      <td>HCM</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><a href="mailto:nctruong861990@gmail.com">nctruong861990@gmail.com</a></td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td>
                        123-4567-890(Landline)
                        <br />
                        555-4567-890(Mobile)
                      </td>
                    </tr>

                  </tbody>
                </table>

                <a href="" className="btn btn-primary">My Sales Performance</a>
                <a href="" className="btn btn-primary margin-left-5">Team Sales Performance</a>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <a
              dataOriginalTitle="Broadcast Message"
              dataToggle="tooltip"
              type="button"
              className="btn btn-sm btn-primary"
            >
              <i className="glyphicon glyphicon-envelope" />
            </a>
            <span className="pull-right">
              <a
                href="edit.html"
                dataOriginalTitle="Edit this user"
                dataToggle="tooltip"
                type="button"
                className="btn btn-sm btn-warning"
              >
                <i className="glyphicon glyphicon-edit" />
              </a>
              <a
                dataOriginalTitle="Remove this user"
                dataToggle="tooltip"
                type="button"
                className="btn btn-sm btn-danger margin-left-5"
              >
                <i className="glyphicon glyphicon-remove" />
              </a>
            </span>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;
