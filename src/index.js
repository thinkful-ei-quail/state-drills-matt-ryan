import React from 'react';
import ReactDOM from 'react-dom';
// import Bomb from './state-drills/Bomb';
import './index.css';
import Accordian from './state-drills/Accordian';

const sections = [
  {
    title: 'Section 1',
    content: 'Never gonna give you up.',
  },
  {
    title: 'Section 2',
    content: 'Never gonna let you down.',
  },
  {
    title: 'Section 3',
    content: 'Never gonna hurt you.',
  },
]

ReactDOM.render(<Accordian sections={sections}/>, document.getElementById('root'));