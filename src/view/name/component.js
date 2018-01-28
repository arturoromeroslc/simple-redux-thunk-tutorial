import React from 'react'

class Name extends React.Component {
  /* eslint-disable react/prop-types */
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  onChanged(e) {
    this.setState({ name: e.target.value })
  }

  update(e) {
    e.preventDefault()
    this.props.update(this.state.name)
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.update(e)}>
          <input
            onChange={e => this.setState({ name: e.target.value })}
            value={this.state.name}
          />
        </form>
        <h1>Name is {this.props.name}</h1>
      </div>
    )
  }
}

export default Name
