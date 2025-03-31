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

## Working

To start using the editor, click on the "Start Coding Now" button or navigate to the Editor via the navbar.

The Editor page consists of multiple sections:

- At the top, you'll find common SQL query keywords that you can click to insert directly into the editor.

- A table list section is provided, where you can view all available table names and click on them to use them instantly.

- On the rightmost section, a panel displays all your recent queries for quick access.

- Below the recent queries, there is a commands section listing all the commands supported by this SQL Editor.

Supported Queries:

SELECT * FROM employee_territories;

SELECT * FROM employees;

SELECT * FROM categories;

SELECT * FROM customers;

SELECT * FROM order_details;

SELECT * FROM orders;

SELECT * FROM regions;

SELECT * FROM shippers;

SELECT * FROM suppliers;

SELECT * FROM territories;

## Performace tracking and Optimization

#### Performance Optimization & Enhancements

To ensure optimal performance, I utilized Google's Lighthouse tool and PageSpeed Insights to analyze page load time and adherence to web standards.

#### Responsiveness & Adaptive Design

While the application is primarily desktop-focused, it has been designed to be highly responsive. Instead of absolute units, relative units like em, rem, vh, and vw are used for better scalability. Media queries ensure smooth adaptation across different screen sizes.

#### Progressive Web App (PWA) Integration

The application has been developed as a Progressive Web App (PWA), making it installable and accessible offline. This aligns with Google's push for PWAs, enhancing user experience and performance.

#### Hosting & Performance Optimization

The application is hosted on Netlify, a platform known for fast deployment, CDN benefits, and automatic caching. Netlify also provides free SSL certificates, enhancing security and improving search engine rankings.

#### Efficient Loading & Minimal Dependencies

- The code has been refactored for reusability, reducing redundancy and unnecessary imports.

- React Lazy Loading ensures non-essential components load in the background, improving initial render speed.

- Minimal dependencies were used to keep the application lightweight and efficient.

  ![image](https://github.com/user-attachments/assets/0a035c00-b282-42a3-936d-7f0d6111f2cd)


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




