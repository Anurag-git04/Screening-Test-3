# Screening-Test-3

A simple **Todo List API** built using **Node.js**, **Express**, and **MongoDB**.

## Features
- Add a new Todo (`POST /todos`)
- Get all Todos (`GET /todos`)
- Delete a Todo by ID (`DELETE /todos/:id`)

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv

## Installation
:
   ```bash
   git clone https://github.com/Anurag-git04/Screening-Test-3.git
    cd Screening-Test-3
    npm install
    MONGODB_URI=your_mongodb_connection_string
    http://localhost:4000
```

## Sample Response 
 ``` bash
  [
  {
    "_id": "64d8a97f83dfedb5f3c85e4a",
    "task": "Learn Node.js",
    "completed": false,
    "__v": 0
  }
]


```
