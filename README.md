# Luxoft_Assessment

## Setup in local

- Clone the project in local

### For Server-side:

- Install dependencies: `cd Luxoft_Assessment/server && npm install`
- Start development server: `npm run start-dev`
- In the `.env` file `PORT` can be overridden.

### API Details

#### 1. User login

Request
Method: `POST`
URL: `localhost:3000/login`
Params: `{"email": "email_id", "password" : "password"}`

Response

```
[
    {
        "id": 3,
        "name": "John",
        "email": "John@123.com",
        "password": "98!891",
        "role": "ADMIN"
    }
]
```

#### 2. Fetch all users

Request
Method: `GET`
URL: `localhost:3000/users`

Response

```
[
    {
        "id": 4,
        "name": "Fred",
        "email": "Fred@123.com",
        "password": "68651",
        "role": "ADMIN"
    },
    {
        "id": 1,
        "name": "James",
        "email": "James@123.com",
        "password": "1!23#4",
        "role": "EMPLOYEE"
    },
    {
        "id": 3,
        "name": "John",
        "email": "John@123.com",
        "password": "98!891",
        "role": "ADMIN"
    },
    {
        "id": 2,
        "name": "Peter",
        "email": "Peter@123.com",
        "password": "8^23!3",
        "role": "EMPLOYEE"
    }
]

```

#### 3. Fetch User by Id

Request
Method: `GET`
URL: `localhost:3000/users/:userId`

Response

```
{
    "id": 1,
    "name": "James",
    "email": "James@123.com",
    "password": "1!23#4",
    "role": "EMPLOYEE"
}
```

### For Client-side:

Install dependencies: `cd Luxoft_Assessment/client && npm install`
- Start server: `npm run start`