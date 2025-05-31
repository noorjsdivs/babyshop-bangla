# BabyShop Bangla - MERN Stack Project

## Overview

BabyShop Bangla is a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project features a robust backend server, an interactive admin dashboard, a dynamic client-facing web app, and a mobile component.
Designed for beginners and intermediate developers, this project serves as a hands-on learning resource for building scalable, modern web applications following industry-standard practices.
The project is part of a comprehensive YouTube tutorial series, guiding developers through each step of development, from setting up the server and admin panel to implementing CRUD operations and deploying the application.
Features

## 🔗 Preview

## ![Dashboard Preview](/public/preview_image.png)

## Backend Server:

Built with Node.js and Express.js, providing scalable APIs and CRUD operations connected to MongoDB.
Admin Dashboard: A fast and modern admin panel created using ViteJS and React for managing products, orders, and users.
Client App: A dynamic, user-friendly React-based web application for customers to browse and purchase products.
Mobile Component: A mobile-optimized interface (planned) for seamless access on smartphones.
Best Practices: Modular project structure, clean code, and industry-standard development workflows.

## Technologies Used

MongoDB: NoSQL database for storing product, user, and order data.
Express.js: Backend framework for building RESTful APIs.
React: Frontend library for the admin dashboard and client app, powered by ViteJS for fast development.
Node.js: Runtime environment for the backend server.
ViteJS: Next-generation frontend tooling for a blazing-fast development experience.
JavaScript: Core programming language for both frontend and backend.

## Project Structure

```bash
babyshop-bangla/
├── client/ # React-based client app (ViteJS)
├── admin/ # Admin dashboard (ViteJS + React)
├── server/ # Node.js + Express.js backend
├── mobile/ # Mobile component (planned)
├── README.md # Project documentation
└── package.json # Project dependencies and scripts
```

# Getting Started

## Prerequisites

Node.js (v16 or higher)
MongoDB (local or cloud instance, e.g., MongoDB Atlas)
npm or yarn
Git

## Installation

```bash
Clone the repository:
git clone https://github.com/noorjsdivs/babyshop-bangla.git
cd babyshop-bangla

```

Install dependencies:

For the server:

```bash

cd server
npm install

```

For the admin dashboard:

```bash
cd admin
npm install

```

For the client app:

```bash

cd client
npm install

```

Set up environment variables:

Create a .env file in the server directory with the following:

```bash
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Replace your_mongodb_connection_string with your MongoDB URI.

Run the application:

Start the server:

```bash
cd server
npm start
```

Start the admin dashboard:

```bash
cd admin
npm run dev
```

Start the client app:

```bash
cd client
npm run dev
```

Access the application:

Server: http://localhost:5000
Admin Dashboard: http://localhost:5173 (default ViteJS port)
Client App: http://localhost:5174 (or configured port)

## Usage

Admin Dashboard: Manage products, view orders, and handle user accounts.
Client App: Browse products, add to cart, and place orders.
Backend APIs: Test CRUD operations using tools like Postman (e.g., GET /api/products, POST /api/products).

YouTube Tutorial Series
This project is part of a YouTube series designed to teach MERN stack development. Follow along to learn:

Setting up a Node.js server and ViteJS admin panel
