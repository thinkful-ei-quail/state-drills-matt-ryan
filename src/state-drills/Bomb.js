import React from 'react';

class Bomb extends React.Component {
  state ={
    count: 0,
    message: ''
  }

  componentDidMount() {
    this.interval = setInterval(() => {this.bombCounter(this.state.count)}, 1000);
  }

  bombCounter = (count) => {
    console.log(count);
    let message = '';
    this.setState({count: count + 1});
    if (count >= 8) {
      message = 'BOOM!!!';
    } else {
      if (count % 2 === 0) {
        message = 'tick';
      } else {
        message = 'tock';
      }
    }
    this.setState({message: message});
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Bomb;