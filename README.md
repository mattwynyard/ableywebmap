# Abley Technical Assesment Property Viewer Webmap

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Install

After cloning project run:

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Abley Technical Assesment Report

This web application has been built using the ArcGIS Javascript API. The application loads an ArcGIS webmap from a web portal.\
While the map is loading a spinner shows the status as loading.\
When the map is loaded a callback updates the application state to 'loaded'. Three feature layers are added to the map: 
1. LINZ NZ Property titles.
2. LINZ NZ Building outlines.
3. LINZ NZ Mean high water.

In the map view the widgets: home, metric scalebar, compass, layer list (which toggles visibilty of the layers) and basemap toggle 
(which togglesbetween a sattelite and map) are available.
The Buildings and Titles layer is clickable and popup displayes the under-lying data of the geometry.

# Challenges:

Although I felt I understood loading pattern of the map and how to retreive from callbacks. I was not sure I was updating the state of the app.\
correctly i.e. using a passing a callback as props from App container to the Map, as there is dependency issue warning for the setStatus callback.\
Including setStatus in the dependency array removed this warning, the app renders twice on startup. Therefore setStatus was removed from dependency\ 
array as the warning was prefered over extra renders.  
My main challenges was setting up the testing. I finally managed to remove errors once I learnt how to mock modules using jest. Although I'm 
doubtful I am doing this correctly as there are still errors with the web map and am unable to solve in the available time frame. 

# Improvements:
I was also not to sure if the NTZM data needed to be re-projected to WGS84. I decided to stick with NZTM. In a production map I would re-project the
layers data to WGS84 and use a web mercator map. Mainly because the public is more familiar with theses coordinates.
Some of the css needs tuning as I had a few issues alligning the footer and map. I would make css improvements so the map is can be tested for different
screen sizes, (although I don't think this web app would work to well on mobile).
