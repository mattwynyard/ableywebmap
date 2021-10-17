import React from 'react';
import CustomNavbar from './CustomNavbar';
import App from './App';
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
  test('it mounts', () => {
    const wrapper = render(<App />)
    const navWrapper = render(<CustomNavbar />)
    //expect wrapper.state.status = "loaded"
  });
 });

 