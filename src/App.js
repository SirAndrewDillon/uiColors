import React, { Component, createRef } from 'react';
import './App.css';

// Components
import ColorPicker from './components/ColorPicker';
import ButtonDirection from './components/ButtonDirection';
import ButtonRandom from './components/ButtonRandom';

class App extends Component {
  state = {
    hexOne: '#2491CA',
    hexTwo: '#9F78D2',
    direction: 'to left'
  };

  appRef = createRef();

  componentDidUpdate() {
    const app = this.appRef.current;

    if (this.state.direction !== 'radial') {
      app.style.background = `linear-gradient(${this.state.direction}, ${this.state.hexOne}, ${this.state.hexTwo})`;
    } else {
      app.style.background = `radial-gradient(${this.state.hexOne}, ${this.state.hexTwo})`;
    }
  }

  handleHexOne = color => {
    this.setState({
      hexOne: color
    });
  };

  handleHexTwo = color => {
    this.setState({
      hexTwo: color
    });
  };

  handleDirection = direction => {
    this.setState({
      direction
    });
  };

  handleRandom = () => {
    const randomHexOne =
      '#' +
      ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
    const randomHexTwo =
      '#' +
      ('00000' + ((Math.random() * (1 << 24)) | 0).toString(16)).slice(-6);
    const direction = [
      'to right',
      'to bottom right',
      'to bottom',
      'to bottom left',
      'to left',
      'to top left',
      'to top',
      'to top right',
      'radial'
    ];
    const randomDirection =
      direction[Math.floor(Math.random() * direction.length)];

    this.setState({
      hexOne: randomHexOne,
      hexTwo: randomHexTwo,
      direction: randomDirection
    });
  };

  render() {
    let cssCode;

    if (this.state.direction !== 'radial') {
      cssCode = `background: linear-gradient(${this.state.direction}, ${this.state.hexOne}, ${this.state.hexTwo});`;
    } else {
      cssCode = `background: radial-gradient(${this.state.hexOne}, ${this.state.hexTwo});`;
    }

    return (
      <div className='app' ref={this.appRef}>
        <header>
          <h1>UI Colors</h1>
        </header>

        <section className='settings'>
          <div className='settings-group'>
            <ColorPicker
              color={this.state.hexOne}
              handleColor={this.handleHexOne}
            />

            <ColorPicker
              color={this.state.hexTwo}
              handleColor={this.handleHexTwo}
            />
          </div>

          <div className='settings-group'>
            <ButtonDirection
              currentDirection={this.state.direction}
              direction='to right'
              handleDirection={this.handleDirection}
            />
            <ButtonDirection
              currentDirection={this.state.direction}
              direction='to bottom right'
              handleDirection={this.handleDirection}
            />
            <ButtonDirection
              currentDirection={this.state.direction}
              direction='to bottom'
              handleDirection={this.handleDirection}
            />
            <ButtonDirection
              currentDirection={this.state.direction}
              direction='to bottom left'
              handleDirection={this.handleDirection}
            />
            <ButtonDirection
              currentDirection={this.state.direction}
              direction='to left'
              handleDirection={this.handleDirection}
            />
            <ButtonDirection
              currentDirection={this.state.direction}
              direction='to top left'
              handleDirection={this.handleDirection}
            />
            <ButtonDirection
              currentDirection={this.state.direction}
              direction='to top'
              handleDirection={this.handleDirection}
            />
            <ButtonDirection
              currentDirection={this.state.direction}
              direction='to top right'
              handleDirection={this.handleDirection}
            />
            <ButtonDirection
              currentDirection={this.state.direction}
              direction='radial'
              handleDirection={this.handleDirection}
            />
          </div>

          <div className='settings-group'>
            <ButtonRandom handleRandom={this.handleRandom} />
          </div>
        </section>

        <section className='result'>
          <p>{cssCode}</p>
          <br />
          <br />
          <p>
            Made with <span>❤️</span> by Andrew Dillon
          </p>
        </section>
      </div>
    );
  }
}

export default App;
