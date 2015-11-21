import React from 'react';
import Child from './Child.jsx';

module.exports = React.createClass({
  render () {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child />
      </div>
    );
  }
});
