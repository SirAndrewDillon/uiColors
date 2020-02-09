import React, { Component } from 'react'
import '../App.css'

class ButtonRandom extends Component {
  
  render() {
    return (
      <button 
        className='random-button'
        onClick={this.props.handleRandom}
      >
        Random
      </button>
    )
  }
}

export default ButtonRandom