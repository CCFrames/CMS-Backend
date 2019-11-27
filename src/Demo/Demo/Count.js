import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/actions';

class Count extends React.Component {
  increment = () => {
    const { increment } = this.props;
    increment();
  };

  decrement = () => {
    const { decrement } = this.props;
    decrement();
  };

  reset = () => {
    const { reset } = this.props;
    reset();
  };

  render() {
    const { count } = this.props;
    return (
      <div className="col">
        <h1>CMS</h1>
        <p>This is my Demo!</p>
        <h3>计数器</h3>

        <div>
          <Button onClick={this.decrement}>-</Button>
          <Input placeholder="Basic usage" value={count} disabled />
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.reset}>RESET</Button>
        </div>
        <Link to="/demo">返回Dmo</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { decrement, increment, reset } = actions;
  return bindActionCreators(
    {
      decrement,
      increment,
      reset,
    },
    dispatch,
  );
};

Count.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
