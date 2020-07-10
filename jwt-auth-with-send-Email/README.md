# Node-js authentication with jwt & Send real email api :tada:

## Getting Started
### Features :fire:
   - auth with jwt
   - send welcome email
   - sensitive data read from `.env` file
   - implement special error handeling middleware
   - jwt save via cookie

### Dependencies
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs) - use for password hash
  - [dotenv](https://www.npmjs.com/package/dotenv) - use for access .env file data (process.env)
  - [express](https://www.npmjs.com/package/express) - use for nodejs web framwork
  - [jsonwebtoken](https://www.npmjs.com/package/jwtwebtoken) - use for create jwt token
  - [mongoose](https://www.npmjs.com/package/mongoose) - use for DB related work
  - [nodemailer](https://www.npmjs.com/package/nodemailer) - use for send real email 
  - [nodemon](https://www.npmjs.com/package/nodemon) - use for automatically restarting the node application

### Setup
- Clone this repo to your desktop and run `npm install` to install all the dependencies.
- You might want to look into `temp.env`, your need to create `config.env` on env directory and chnage this kind of informations.
  - DB & Port related information
    - NODE_ENV=your-env
    - PORT=your-port
    - DATABASE=your-db-Str (cloud DB)
    - DATABASE_LOCAL=your-local-db-Str
    - DATABASE_PASSWORD=your-db-password
  - JWT related information [(npm here)](https://www.npmjs.com/package/jsonwebtoken)
    - JWT_SECRET=your-jwt-secret
    - JWT_EXPIRES_IN=your-set-expires-in
    - JWT_COOKIE_EXPIRES_IN=your-set-cookie-expires-in
  - Send email related information [(npm here)](https://www.npmjs.com/package/nodemailer)
    - EMAIL_USERNAME=your-email-username
    - EMAIL_PASSWORD=your-email-password
    - EMAIL_HOST=your-email-host
    - EMAIL_PORT=your-email-port

### Usage
- After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.
- Once the dependencies are installed, you can run `npm start` to start the application. 
- You will then be able to access it at `localhost:3000`

### API access
- **Get all user** (get req) (only **admin role** access): `localhost:3000/api/user`
```
   - Normal user try to get all user information
     Error: You do not have permission to perform this action
     
   - Admin try to get all user information
   {
    "success": "ok",
    "length": 2,
    "data": {
        "users": [
            {
                "role": "user",
                "_id": "5eef5450435b732a470d8974",
                "email": "jinnatul@gmail.com",
                "phone": "019",
                "username": "jinnatul",
                "__v": 0
            },
            {
                "role": "admin",
                "_id": "5eefb44166e5167acf2830a1",
                "email": "morol@gmail.com",
                "phone": "019",
                "username": "morol",
                "__v": 0
            }
         ]
      }
   }
```
- **Sign-up** (post req): `localhost:3000/api/user/signup`
```
  - body data
  {
    "email": "jinnatul@gmail.com",
    "password": "test1234",
    "passwordConfirm": "test1234",
    "phone": "019"
  }

  - response data with jwt
  {
    "status": "ok",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWY1NDUwNDM1YjczMmE0NzBkODk3NCIsImlhdCI6MTU5Mjc0MzAwMCwiZXhwIjoxNTkzMzQ3ODAwfQ.-J9pnFMR_XpcjOs1o_6kuXklJKnY3OQRhxtGpDGoOV8",
    "data": {
        "user": {
            "role": "user",
            "_id": "5eef5450435b732a470d8974",
            "email": "jinnatul@gmail.com",
            "phone": "019",
            "username": "jinnatul",
            "__v": 0
        }
     }
  }
  
  - send email
   Header: Sign-Up Notification
   From: <morolswediu@gmail.com>
   To: <jinnatul@gmail.com>
   Body: Welcome to join us, jinnatul!!!
```

- **Log-in** (post req): `localhost:3000/api/user/login`
```
  -  body data
  {
    "email": "morol@gmail.com",
    "password": "test1234"
  }
  
  - response data with jwt
  {
    "status": "ok",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZiNDQxNjZlNTE2N2FjZjI4MzBhMSIsImlhdCI6MTU5Mjc2NzYxOSwiZXhwIjoxNTkzMzcyNDE5fQ.KI5ovIp-bsjL_8iQ9Kc8sXypzAaRAbuY3lrNN4IHwJE",
    "data": {
        "user": {
            "role": "admin",
            "_id": "5eefb44166e5167acf2830a1",
            "email": "morol@gmail.com",
            "phone": "019",
            "username": "morol",
            "__v": 0
         }
      }
  }
  
  - send email
   Header: LogIn Notification
   From: <morolswediu@gmail.com>
   To: <morol@gmail.com>
   Body: Login successful, morol!!!
```

### I have a question. Where should I ask? :thinking:

If you have any query, feature request or if you find any kind of bug :beetle: in our site please let us know by simply opening a issue [here](https://github.com/pro-js/node-jwt-auth-with-send-real-email-api/issues).

### Can I contribute in this project? :smiley:

Of course you can. It is an open source project. If you want to contribute with us follow the procedures -

- Fork the repository in your github account.
- Clone it in your local and do the changes you want.
- Make a PR with proper documentation of what you did as they say _Lack of proper documentation is becoming a problem for acceptence_ :wink:

### Contributor :nerd_face:
Contributors who have worked hard to keep this application up to date are -
- [Jinnatul Islam Morol](https://www.facebook.com/mdjinnatul.islam)

### License and copyright
©[Morol](https://github.com/jinnatul) & This project is licensed under the terms of the MIT license.

### If you happen to like our work please give a star :star: on the repository
 
