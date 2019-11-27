import React from 'react';
import { Link } from 'react-router-dom';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayDate: [
        { id: 1, url: '/one', name: 'One' },
        { id: 2, url: '/two', name: 'Two' },
        { id: 3, url: '/three', name: 'Three' },
        { id: 4, url: '/four', name: 'Four' },
        { id: 5, url: '/count', name: 'count计数器' },
      ],
    };
  }

  render() {
    const { arrayDate } = this.state;

    return (
      <div className="col">
        <h1>CMS</h1>
        <p>This is my Demo!</p>
        <ul>
          {arrayDate.map((item) => (
            <li key={item.id}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Demo;
