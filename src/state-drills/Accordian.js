import React from 'react';
import './Accordion.css'

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

  renderTab(section, tabId, activeTabIndex) {
    return (
      <li key={tabId}>
        <button onClick={() => this.handleActiveTab(tabId)}>
          {section.title}
        </button>
        {(activeTabIndex === tabId) && <p>{section.content}</p>}
      </li>
    );
  }

  render () {
    return (
      <ul>
        {this.props.sections.map((section, tabId) => {
          return this.renderTab(section, tabId, this.state.activeTabIndex);
        })}
      </ul>
    );
  }
}

export default Accordian;