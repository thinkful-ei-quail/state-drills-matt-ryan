import React from 'react';

class Accordian extends React.Component {
  static defaultProps = {
    sections: []
  }

  state = {
    activeTabIndex: null
  }

  handleActiveTab (index) {
      this.setState({activeTabIndex: index});
  }

  renderTab(section) {
    return (
      <li>
        <button>
          {section.title}
        </button>
        
      </li>
    );
  }

  render () {
    return (
      <ul>
        {this.renderTab({title: 'Secion One'})}
      </ul>
    );
  }
}

export default Accordian;