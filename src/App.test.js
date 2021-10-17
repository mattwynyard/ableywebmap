import React from 'react';
import ReactDOM from 'react-dom';
import CustomNavbar from './CustomNavbar';
import App from './App';
import { render, mount} from 'enzyme';

describe('App component', () => {
  test('it renders', () => {
    mount(<App />);
  });
 }) 