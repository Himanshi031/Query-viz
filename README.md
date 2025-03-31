# QUERY-VIZ

## Deployed Application Link
https://query-viz-app.netlify.app/ (Using Netlify)

## Introduction
The SQL Query Runner is a web-based application designed to execute SQL queries and display the results in a user-friendly interface. This application provides an interactive environment where users can input SQL commands, run them, and view query results instantly.

## Working of the Application

### User Input 
– The application features an input field where users can type their SQL queries from the provided common queries and operations.

### Query Execution 
– Upon submission, the application processes the query using a backend database (or a simulated execution for this dummy version).

### Result Display 
– The output of the executed query is shown in a structured table format.

### Error Handling 
– If an incorrect query is entered, an error message is displayed to guide the user.

## Technologies Used
- React.js
- Mantine UI
- CSS
- HTML

## Dataset 
The dummy data is fetched from the provided source: 

 https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv

## Installation & Deployment

#### 1. Install React Application 
npx create-react-app [app_name]

npm i react-router-dom (For react router)

npm i @mantine/core (For Mantine UI features)

#### 2. For deployment : 

npm run build (create a build folder)

Drag the build folder in netlify app (https://app.netlify.com/).

## Screenshots

![Screenshot 2025-03-31 115041](https://github.com/user-attachments/assets/46688395-a48a-4630-9a77-d2c79aa14b39)


![image](https://github.com/user-attachments/assets/5321f84c-7d80-43c9-b56a-f12a05a51d94)


