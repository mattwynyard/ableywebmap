import React from 'react';
import ReactDOM from 'react-dom';
import CustomNavbar from './CustomNavbar';
import WebMap from "@arcgis/core/WebMap";
import App from './App';
import { render, screen, mount, waitFor } from '@testing-library/react';

describe('App component', () => {
  jest.mock(<WebMap />)
  test('it mounts', () => {
    const wrapper = render(<App />)
    //expect wrapper.state.status = "loaded"
  });
 });

 