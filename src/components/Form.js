import React from "react";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Email
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="text" />
          </label>
        </div>
        <input type="submit" value="Submit"/>
      
      <div>
          <h3>
              Fungsinya belum, baru formnya aja 
          </h3>
      </div>
      </form>
    );
  }
}

export default NameForm;
