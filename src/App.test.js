import React from 'react';
import CustomNavbar from './CustomNavbar';
import App from './App';
import CustomFooter from "./CustomFooter";
import CustomSpinner from "./CustomSpinner";
import { render} from '@testing-library/react';
jest.mock("@arcgis/core/WebMap", () => ({
  WebMap: () => ({})
}));
jest.mock("@arcgis/core/layers/FeatureLayer", () => ({
  FeatureLayer: () => ({})
}));
jest.mock("@arcgis/core/views/MapView", () => ({
  MapView: () => ({})
}));

jest.mock("@arcgis/core/widgets/Home", () => ({
  Home: () => ({})
}));
jest.mock("@arcgis/core/widgets/ScaleBar", () => ({
  ScaleBar: () => ({})
}));
jest.mock("@arcgis/core/widgets/Compass", () => ({
  Compass: () => ({})
}));
jest.mock("@arcgis/core/widgets/LayerList", () => ({
  LayerList: () => ({})
}));
jest.mock("@arcgis/core/widgets/BasemapToggle", () => ({
  BasemapToggle: () => ({})
}));
jest.mock("@arcgis/core/Basemap", () => ({
  Basemap: () => ({})
}));

describe('App component', () => {
  test('it renders', () => {
    const wrapper = render(<App />) 
    //expect wrapper.state.status = "loaded"
  });
 });

 describe('Nav component', () => {
  test('it renders', () => {
    const wrapper = render(<CustomNavbar />)
  });
 });

 describe('Spinner component', () => {
  test('it renders', () => {
    const wrapper = render(<CustomSpinner />)
  });
 });

 describe('Footer component', () => {
  test('it renders', () => {
    const wrapper = render(<CustomFooter />)
  });
 });

 