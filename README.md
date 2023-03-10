# Robot Tracker App

![Alt text](screenshot.png?raw=true "Title")
This project is a simple web application to list and track robots. It allows users to add, edit, view, and delete robots. Each robot has a name and a purpose.

## Technologies Used

- React
- TypeScript
- Axios
- Tailwind CSS
- JWT

## Installation

1.  Clone the repository:
2.  Install the dependencies:
    `cd robot-tracker-frontend-react`
    `yarn install`
3.  Start the development server:
    `yarn start`

## Project Structure

```
├── node_modules/            # Node.js modules
├── src/                     # Source code
│   ├── api/                 # Handlers for different API endpoints
│   ├── components/          # Reusable Components
│   ├── layout/              # Reusable Layout Components
│   ├── pages/               # Pages Components
│   ├── app.tsx              # Pages and Routes are declared here
│   └── index.ts             # Entry point of the app
├── .gitignore
├── package.json
├── tsconfig.json            # TypeScript configuration
└── yarn.lock`
```

### Features

- List all robots
- Add new robot
- View robot details
- Edit robot details
- Delete robot

### API

The application uses a simple API to store and retrieve robot data. The API is implemented using Node.js and Express. It uses local storage for data persistence.

### Authentication

The application uses JWT authentication to secure the API endpoints. Users need to provide valid credentials to access the API. If the user is not authenticated, the application will redirect them to the login page.
