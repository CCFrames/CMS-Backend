import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col">
        <h1>CMS</h1>
        <p>This is my Demo!</p>
        <h1>Welcome to used Demo!</h1>
        <Link to="/demo">
          <Button>GO DEMO</Button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
