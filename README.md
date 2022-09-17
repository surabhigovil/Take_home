# This application is built using React with Typescript to organize images in a dataset

## Steps to run the application locally

In the project directory, run the following to install all the dependencies:

### `npm install`: This step is essential to iniitalize the project with the required dependencies

## Run the application on localhost as a REST API:

1. In a seperate tab from the root of the directory run `npm run api` to start the server
2. In a seperate tab from the root of the directory run `npm start` will run the application on localhost

## Assumptions:
Taking data for this application from a mock schema. 

## Implementing CRUD operation using a fake server
1. Used JSON Server package in React to create a fake REST API for demo purpose
2. `projectAPI` file contains GET and PUT request to manipulate data
3. On click of `Edit` on homepage for each image card a form will show up. The form will present the user with option to mark image as Good or Bad using the `isGoodImage` flag.
4. The statistics shows distribution of Good vs Bad Images as a Pie Chart using the count of `isGoodImage` flag stored in the backend.

## Passing Data to Componenets
1. Projects page and Statistics page are two main components in the application 
2. Data is passed to them using props. 
3. A GET REST Api call is made to fetch data and create a projects object.
4. The project object is passed using props to both the pages

## Screenshots:
<img width="1439" alt="Screen Shot 2022-09-17 at 11 04 07 AM" src="https://user-images.githubusercontent.com/10840984/190870749-62e113a9-f054-41f7-93b0-5f1fa254a899.png">


<img width="1440" alt="Screen Shot 2022-09-17 at 11 06 36 AM" src="https://user-images.githubusercontent.com/10840984/190870795-71e9dd99-ba72-4a54-8134-83bd8dc73d27.png">

<img width="1438" alt="Screen Shot 2022-09-17 at 11 05 30 AM" src="https://user-images.githubusercontent.com/10840984/190870808-35e29f3c-13e8-49e6-b701-205a7bebe385.png">

<img width="1440" alt="Screen Shot 2022-09-17 at 11 06 59 AM" src="https://user-images.githubusercontent.com/10840984/190870784-1c671448-67b5-44fd-abfd-05d83ad267e5.png">

## Edge Cases:
1. When the mock data schema is empty UI is taking of care of not showing any data.
2. Every image has an `isActive` flag which is not being used right now but it's value will be used to show statistics on the Pie Chart from only images which are to be considered part of dataset
3. The size of dataset is not extensive as of now. When a larger nunber of values are present the images will be scrollable.


