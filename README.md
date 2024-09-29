# Blog App

## Table of Contents

- [Backend](#backend)
- [Frontend](#frontend)
- [Running the Project](#running-the-project)
- [License](#license)

## Backend

### Features

- REST API built using **Express.js**.
- **MongoDB** is used as the database.
- **JWT Authentication** for user login and registration.
- **Braintree Payment Gateway** integration.
- Form handling with **express-formidable**.
- Secure password storage with **bcrypt**.

### Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Braintree Payment Gateway
- Nodemon for development

### Installation

1. Clone the repository and navigate to the backend folder:

   ```bash
   git clone https://github.com/kumarshivam03/Blog-App.git
   cd blog/api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following environment variables:

   ```bash
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   ```

4. Start the server:
   ```bash
   nodemon index.js
   ```

## Frontend

### Features

- **React.js** for building the user interface.
- **React Router** for navigation.
- **Ant Design** and **React Icons** for the UI components and icons.
- **Axios** for making API calls.
- **Braintree Drop-in** for integrating the payment gateway.

### Technologies Used

- React.js
- Ant Design for UI components
- React Router
- Axios for API calls
- Braintree for payments

### Installation

1. Navigate to the frontend directory:

   ```bash
   cd blog/client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm run dev
   ```

### Scripts

- `npm start`: Starts the frontend development server.
- `npm run build`: Builds the app for production.
- `npm run test`: Launches the test runner.
- `npm run eject`: Ejects the configuration for customization.

---

## License

This project is licensed under the ISC License.
