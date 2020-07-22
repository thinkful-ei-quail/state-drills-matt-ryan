import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world'
  }

  handleButtonClick = (value) => {
    console.log('button', value);
    this.setState({ who: value});
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}.</p>
        <button onClick={() => this.handleButtonClick('Friend')}>Friend</button>
        <button onClick={() => this.handleButtonClick('React')}>React</button>
        <button onClick={() => this.handleButtonClick('World')}>World</button>
      </div>
    )
  }
}

export default HelloWorld;