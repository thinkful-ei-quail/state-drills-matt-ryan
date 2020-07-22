import React from 'react';
import ReactDOM  from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordian from './Accordian';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('This is the Accordian test.', () => {
  const sectionsProps = [
    {
      title: 'Section One',
      content: 'bla bla bla'
    },
    {
      title: 'Section One',
      content: 'bla bla bla'
    },
    {
      title: 'Section One',
      content: 'bla bla bla'
    }
  ]
  it('Renders empty <li></li> given no accordian', () => {
    const wrapper = shallow(<Accordian />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('Renders no section active by default', () => {
    const wrapper = shallow(<Accordian sections={sectionsProps}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Opens a clicked section', () => {
    const wrapper = shallow(<Accordian sections={sectionsProps}/>);
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Only have one section open at a time', () => {
    const wrapper = shallow(<Accordian sections={sectionsProps}/>);
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});