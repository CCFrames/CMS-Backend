import React from 'react';
import { Link } from 'react-router-dom';

class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="col">
        <h1>CMS</h1>
        <p>This is my Demo!</p>
        <h3>One</h3>
        <Link to="/demo">返回Dmo</Link>
      </div>
    );
  }
}

export default One;
