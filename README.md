# This application is built using React with Typescript to organize images in a dataset

## Available Scripts

In the project directory, you can run:

### `npm init`: To install all the dependencies 

## Run the application on localhost as a REST API:

1. In a seperate tabe run `npm run api` to start the server
2. `npm start` in a tab in the root to run the application on localhost

## Assumptions:
Taking data for this application from a mock schema. 

## Implementing CRUD operation using a fake server
1. Used JSON Server package in React to create a fake REST API for demo purpose
2. `projectAPI` file contains GET and PUT request to manipulate data

## Passing Data to Componenets
1. Projects page and Statistics page are two main components in the application 
2. Data is passed to them using props. 
3. A GET REST Api call is made to fetch data and create a projects object.
4. The project object is passed using props to both the pages
## Edge Cases:

1. When the mock data schema is empty UI is taking of care of not showing any data.
2. Every image has an `isActive` flag which is not being used right now but it's value will be used to show statistics on the Pie Chart from only images which are to be considered part of dataset
3. The size of dataset is not extensive as of now. When a larger nunber of values are present the images will be scrollable.


