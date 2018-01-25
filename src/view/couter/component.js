import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    return <h1>This is the number {this.props.number}</h1>
  }
}

export default Counter
