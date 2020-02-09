import React, { Component } from 'react'
import '../App.css'

class ButtonDirection extends Component {
  
  handleClick = event => {
    this.props.handleDirection(event.target.value)
  }

  render() {
    return (
      <button
        className={this.props.currentDirection !== this.props.direction ? 'direction-button' : 'direction-button is-active'}
        value={this.props.direction}
        onClick={this.handleClick}
      >{this.props.direction}</button>
    )
  }
}

export default ButtonDirection