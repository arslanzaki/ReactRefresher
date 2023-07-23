import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }

  render() {
    const { count, count2 } = this.state;
    return (
      <div>
        <h2>Hello from {this.props.name}</h2>
        <h2>{count} {count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
              count2: 2,
            });
          }}
        >
          Count One
        </button>
      </div>
    );
  }
}

export default ProfileClass;
