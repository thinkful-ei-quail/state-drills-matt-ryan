import React from 'react';
import { render } from '@testing-library/react';

class RouletteGun extends React.Component {
  static defaultProps = {bulletInChamber: 8}
  
  state = {
    chamber: null,
    spinningTheChamber: false,
    message: ''
  }

  randomChamber(){
    console.log('shoot');
    return Math.ceil(Math.random() * 8);
  }

  randomFate() {
    if(this.props.bulletInChamber === this.state.chamber) {
       this.setState({message: 'BANG!'})
    }
    this.setState({message : 'You are safe... for now.'});
  }

  pullTrigger() {
    this.setState({chamber: this.randomChamber(), spinningTheChamber: true})

    setTimeout(this.randomFate, 2000)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={()=> this.pullTrigger()}>Pull the Trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;