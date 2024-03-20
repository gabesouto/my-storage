# My Storage 

This system is designed to offer a seamless interface for managing store inventories, integrating both frontend and backend functionalities to support comprehensive CRUD (Create, Read, Update, Delete) operations. This project was inspired by a skill test that I was offered by a company.

## Deploy
[my-storage](https://my-storage-gabesouto.vercel.app/)

You can access the project in your browser by just clicking the link above


## README map

- [Installation](#installation)
- [Usage](#usage)
- [API endpoints](#api-endpoints)


## Usage

### SignIn/SignUp
to access all the features of the application, you need to be a authenticated user, you can achieve that by login if I'ts not your first time or hitign the 'sign up' button to create you user, you password is going to be cryptografada in the database.

 ![login page](https://github.com/gabesouto/my-storage/blob/main/app/Screenshot%20from%202024-03-18%2015-17-44.png)
 
### Dashboard

this is the core of the applicaton, here you can add multiple produtos, edit and remove, the interface is not yet responsive because the application main focus is in the api, this is just a interface to see the API running
 ![Dashboard](https://github.com/gabesouto/my-storage/blob/main/app/Screenshot%20from%202024-03-18%2015-18-13.png)


## API Endpoints


### /products

- **GET**: Returns all products.
- **POST**: Add a new product to the database.

#### /products/{productId}

- **DELETE**: Endpoint to delete or remove a specific product by its productId.
- **UPDATE**: Endpoint to update a specific product by its productId.

### /signin

- **POST**: Endpoint for user login. Returns a token upon successful authentication.

### /signup

- **POST**: Endpoint to create a new user. Returns user data upon successful registration.


## Installation

Make sure you have Node.js and npm installed on your machine. You can download and install them from the [official Node.js website](https://nodejs.org/).

1. Clone this repository to your local environment:

    ```bash
    git clone https://github.com/gabesouto/lexart-test-tecnico.git
    ```

2. Navigate to the cloned folder:

    ```bash
    cd lexart-test-tecnico
    ```

3. Install  dependencies:

    ```bash
    npm run apps
    ```


### Running the Development Server(optional)

After installing the dependencies, you can start the development server for both the backend and frontend, if you choose to run the application this way make sure you change all endpoint calls to your local .env variables

1. Open a terminal and navigate to the backend folder:

    ```bash
    cd ../backend
    ```

2. Start the development server for the backend:

    ```bash
    npm run dev
    ```

3. Open a new terminal and navigate to the frontend folder:

    ```bash
    cd ../frontend
    ```

4. Start the development server for the frontend:

    ```bash
    npm run dev
    ```

Now you should have the backend and frontend running locally in separate terminals. You can access the application in your browser by visiting `http://localhost:3001`.

### Running the frontend with the API from vercel(recommended)

Choosing to run the application this way means that you don't have to nothing besides starting the frontend.

1. Start the development server for the frontend:

    ```bash
    npm run dev
    ```


