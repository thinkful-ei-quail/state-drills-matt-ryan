import React from 'react';
import { render } from '@testing-library/react';

class RouletteGun extends React.Component {
  static defaultProps = { bulletInChamber: 8 }

  constructor (props) {
    super(props);
    this.timeout = null;
  }

  state = {
    chamber: null,
    spinningTheChamber: false,
  }

  randomChamber() {
    return Math.ceil(Math.random() * 8);
    // return 8;
  }

  randomFate() {
    console.log(this.state.spinningTheChamber)
    this.setState({ spinningTheChamber: false });
  }

  pullTrigger() {

    this.setState((state) => ({ chamber: this.randomChamber(), spinningTheChamber: true }));
    console.log(this.state.spinningTheChamber);
    //this.setState({spinningTheChamber : true});
    this.timeout = setTimeout(() => { this.randomFate() }, 2000)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout);
  }

  render() {
    let message = 'Let\'s play';
    if (this.state.spinningTheChamber) {
      message = 'spinning the chamber and pulling the trigger!...';
    } else {
      if (this.props.bulletInChamber === this.state.chamber) {
        message = 'BANG!'
      } else {
        message = 'You are safe... for now.';
      }
    }
    console.log(this.state.chamber, this.props.bulletInChamber);
    return (
      <div>
        <p>{message}</p>
        <button onClick={() => this.pullTrigger()}>Pull the Trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;