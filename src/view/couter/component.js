import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';

class Counter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <span>
        <h1>This is the number {this.props.number}</h1>
        <RaisedButton onClick={this.props.increase}>+</RaisedButton>
        <RaisedButton onClick={this.props.decrease}>-</RaisedButton>
      </span>
    )
  }
}

export default Counter
