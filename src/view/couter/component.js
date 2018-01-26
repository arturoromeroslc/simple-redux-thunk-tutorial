import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('in here');
    return (
      <span>
        <h1>This is the number {this.props.number}</h1>
        <button onClick={this.props.increase}>+</button>
        <button onClick={this.props.decrease}>-</button>
      </span>
    )
  }
}

export default Counter
