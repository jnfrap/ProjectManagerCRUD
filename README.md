## Task Manager CRUD

This project is a CRUD (Create, Read, Update, Delete) developed with Node.js, Express, TypeScript, Sequelize, and PostgreSQL, designed to efficiently manage tasks. It provides a simple and functional API interface for performing CRUD operations on a PostgreSQL database.

### Key Features

- **Node.js**: The project is built on the server-side JavaScript runtime environment, allowing for scalable and high-performance web applications.
- **Express**: The Express.js framework is used to easily create routes and handle incoming HTTP requests.
- **TypeScript**: The code is written in TypeScript, a typed superset of JavaScript that provides autocompletion, error detection, and an overall improved development experience.
- **Sequelize**: Sequelize is used as an Object-Relational Mapping (ORM) tool to interact with the PostgreSQL database intuitively. It allows for defining data models and performing queries using an object-oriented approach.
- **PostgreSQL**: The PostgreSQL database is a robust and highly reliable option for storing task data. It provides advanced functionalities and solid performance.

### Functionality

The task manager offers the following core functionalities:

- Create a new project, task or user.
- Retrieve a list of all existing projects, tasks or users.
- Get a specific project, task or user by its unique identifier.
- Update the details of an existing project, task or user.
- Delete a project, task or user from the database.

### Prerequisites

Make sure you have the following installed before running the project:

- Node.js: [Download and install Node.js](https://nodejs.org).
- PostgreSQL: [Download and install PostgreSQL](https://www.postgresql.org).

### Installation and Configuration

1. Clone this repository: `git clone https://github.com/jnfrap/ProjectManagerCRUD`
2. Navigate to the project directory: `cd ProjectManagerCRUD`
3. Install the dependencies: `npm install`
4. Create a `.env` file in the root directory and add the following variables:
   - `POSTGRES_HOST`: PostgreSQL host name or IP address.
   - `POSTGRES_PORT`: PostgreSQL port number.
   - `POSTGRES_USER`: PostgreSQL username.
   - `POSTGRES_PASSWORD`: PostgreSQL password.
   - `POSTGRES_DB`: PostgreSQL database name.
5. Place the certificate for connecting to the database in the `src/config` directory with the name `ca.pem`.
6. Create the necessary database tables by running the following SQL queries in your PostgreSQL database:

```
-- Create the 'Project' table
CREATE TABLE project (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description TEXT,
start_date DATE,
end_date DATE,
status VARCHAR(20) CHECK (status IN ('In progress', 'Completed', 'Cancelled', 'On hold', 'Not started'))
);

-- Create the 'User' table
CREATE TABLE user (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
role VARCHAR(100),
email VARCHAR(255),
skills TEXT[]
);

-- Create the 'Task' table
CREATE TABLE task (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
description TEXT,
creation_date DATE,
due_date DATE,
status VARCHAR(20) CHECK (status IN ('In progress', 'Completed', 'Cancelled', 'On hold', 'Not started')),
assigned_to INTEGER,
related_project INTEGER,
FOREIGN KEY (assigned_to) REFERENCES TeamMember(id),
FOREIGN KEY (related_project) REFERENCES Project(id)
);
```

7. Run the project: `npm run dev`
