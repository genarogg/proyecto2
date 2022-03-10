import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="dashbord row">
        <aside className="col-xs-3">
          <button className="buttonBack" type="submit">
            <Link to={"/"} className="/">
              {" "}
              ⬅️ back to dashboard
            </Link>
          </button>

          <h2>Add Member</h2>
        </aside>
        <form className="container-form row col-xs-9">
          <div className="personal-info col-xs-6 row">
            <div className="col-xs-12">
              <h4 className="title">Personal info</h4>
            </div>
            <div className="col-xs-6">
              <div className="title">Title</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">Last Name*</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">First Name*</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">Middle Name</div>
              <input type="text" />
            </div>
            <div className="col-xs-12 ">
              <div className="title">Suffix(Type in custom suffix)</div>
              <input type="text" className="w100" />
            </div>
            <div className="col-xs-12">
              <div className="title">Address (1)</div>
              <input type="text" className="w100" />
            </div>
            <div className="col-xs-12">
              <div className="title">Address (2)</div>
              <input type="text" className="w100" />
            </div>
            <div className="col-xs-6">
              <div className="title">Zip Code</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">State</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">City</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">SocialSecurity #</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">Empoyee Number</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">IAFF#</div>
              <input type="text" />
            </div>
          </div>
          <div className="member-status col-xs-6 row">
            <div className="col-xs-12">
              <h4 className="title">Menber Status</h4>
            </div>
            <div className="col-xs-6">
              <input type="radio" />
              <label htmlFor=""></label>
            </div>
            <div className="col-xs-6">
              <input type="radio" />
              <label htmlFor=""></label>
            </div>
            <div className="col-xs-12">
              <h4 className="title">Demographics</h4>
            </div>
            <div className="col-xs-6">
              <div className="title">Date of birth*</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">Join Date *</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">Gender</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">Race</div>
              <input type="text" />
            </div>
            <div className="col-xs-12">
              <h4 className="title">Job Info</h4>
            </div>
            <div className="col-xs-6">
              <div className="title">Original Hire *</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">Badge #</div>
              <input type="text" />
            </div>
            <div className="col-xs-12">
              <div className="title">Position</div>
              <input type="text" className="w100" />
            </div>
            <div className="col-xs-12">
              <div className="title">Sick Plan *</div>
              <input type="text" className="w100" />
            </div>
            <div className="col-xs-12">
              <h4 className="title">Contact Details</h4>
            </div>
            <div className="col-xs-6">
              <div className="title">Home Phone</div>
              <input type="text" />
            </div>
            <div className="col-xs-6">
              <div className="title">Cell Phone</div>
              <input type="text" />
            </div>
            <div className="col-xs-12 ">
              <div className="title">Email Address</div>
              <input type="text" className="w100" />
            </div>
          </div>
          <div className="row button">
            <div className="col-xs-3">
              <button className="crear" type="submit">
                Create
              </button>
            </div>
            <div className="col-xs-3">
              <button className="closed" type="submit">
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
