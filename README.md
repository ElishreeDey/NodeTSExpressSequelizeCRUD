# Node Express TypeScript Sequelize CRUD API

A backend CRUD application built using Node.js, Express.js, TypeScript, Sequelize ORM, PostgreSQL and JWT Authentication.

This project follows a Controller → Service → Repository architecture to keep code scalable, reusable and easy to maintain.

# Project Purpose

- REST API development
- Express + TypeScript backend setup
- PostgreSQL integration
- Sequelize ORM
- JWT Authentication
- Middleware handling
- Error handling
- Clean folder structure
- Scalable backend architecture

# Tech Stack

Backend Technologies:

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Sequelize ORM
- JWT Authentication
- Helmet
- CORS
- Dotenv

# Project Request Flow

Client / Postman
↓
Routes
↓
Middleware
↓
Controller
↓
Service Layer
↓
Repository Layer
↓
Model
↓
PostgreSQL Database

Each layer has its own responsibility.

# Folder Structure

src
│
├── config
├── constants
├── controllers
├── helpers
├── middleware
├── models
├── repositories
├── routes
├── services
├── types
└── index.ts

## Install Packages

npm install

## Update .env

Update:

- DB_HOST
- DB_PORT
- DB_USER
- DB_PASSWORD
- DB_NAME

## Run Development Server

npm run dev

## Build Project

npm run build

## Start Production Server

npm start

## API Endpoints

POST
http://localhost:3000/api/login
body should have a email based on which JWT encripted token will be generated
e.g: "email":"elishree@test.com"

POST
http://localhost:3000/api/users
Use the above Auth Token generated in login with Json body as input in Postman.

GET
http://localhost:3000/api/users
Use the above Auth Token generated in login.

GET
http://localhost:3000/api/users/1
Use the above Auth Token generated in login.

PUT
http://localhost:3000/api/users/1
Use the above Auth Token generated in login with Json body as input in Postman.

DELETE
http://localhost:3000/api/users/1
Use the above Auth Token generated in login.
