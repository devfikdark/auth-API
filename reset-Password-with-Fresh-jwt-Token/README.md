# Node-js reset password with Send fresh jwt token api :tada:

## Getting Started
### :large_blue_diamond: Features :fire:
 :heavy_check_mark: auth with jwt\
 :heavy_check_mark: forgot password & send email (token)\
 :heavy_check_mark: reset password using receive token from email\
 :heavy_check_mark: implement special error handeling middleware\
 :heavy_check_mark: update my password\
 :heavy_check_mark: jwt save via cookie

### :large_blue_diamond: Dependencies
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs) - use for password hash
  - [dotenv](https://www.npmjs.com/package/dotenv) - use for access .env file data (process.env)
  - [express](https://www.npmjs.com/package/express) - use for nodejs web framwork
  - [jsonwebtoken](https://www.npmjs.com/package/jwtwebtoken) - use for create jwt token
  - [mongoose](https://www.npmjs.com/package/mongoose) - use for DB related work
  - [nodemailer](https://www.npmjs.com/package/nodemailer) - use for send real email 
  - [nodemon](https://www.npmjs.com/package/nodemon) - use for automatically restarting the node application

### :large_blue_diamond: Setup
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

### :large_blue_diamond: Usage
- After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.
- Once the dependencies are installed, you can run `npm start` to start the application. 
- You will then be able to access it at `localhost:3000`

### :large_blue_diamond: API access
  :red_circle: **Sign-up** (post req): `localhost:3000/api/user/signup` [details](https://github.com/pro-js/node-jwt-auth-with-send-real-email-api/blob/master/README.md/#api-access)\
  :red_circle: **Log-in** (post req): `localhost:3000/api/user/login` [details](https://github.com/pro-js/node-jwt-auth-with-send-real-email-api/blob/master/README.md/#api-access)\
  :red_circle: **Forgot-Password** (post req): `localhost:3000/api/user/forgotPassword`
  ```
  - body data
  {
    "email": "morol@gmail.com"
  }
  
  - response 
  {
    "status": "ok",
    "message": "Token send to your email!"
  }
  
  - send email
  Forget your password ? Submit a Patch request with your new password and passwordConfirm 
  to: http://localhost:4000/api/user/resetPassword/0334d0b444ccedbb1412e1fb78979c8193509b075fd160aafcf9dead98f31764.
  If you didn't forget your password, please ignore this email !!!
  ```
  :red_circle: **Reset-Password** (patch req): `localhost:3000/api/user/resetPassword/token`
  ```
  - body data
  {
	   "password": "test1234",
   	"passwordConfirm": "test1234"
  }
  
  - response with update data (But hide password)
  {
    "status": "ok",
    "data": {
        "model": {
            "role": "admin",
            "_id": "5ef0c99214ec046b9acc8d00",
            "email": "morol@gmail.com",
            "phone": 19,
            "username": "morol",
            "__v": 0
        }
     }
  }
  ```
  :red_circle: **Update-Password** (patch req): `localhost:3000/api/user/updateMyPassword`
  ```
  - body data
  {
    "passwordCurrent": "pass1234",
    "password": "test1234",
    "passwordConfirm": "test1234"
  }
  
  - response with update password (But hide password)
  {
    "status": "ok",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjBjOTkyMTRlYzA0NmI5YWNjOGQwMCIsImlhdCI6MTU5Mjg1NDU0OCwiZXhwIjoxNTkzNDU5MzQ4fQ.sqziUpAt5IJGjkmo5sMCHkoZbGo3TulIxROPfvEM7Ag",
    "data": {
        "model": {
            "role": "admin",
            "_id": "5ef0c99214ec046b9acc8d00",
            "email": "morol@gmail.com",
            "phone": 19,
            "username": "morol",
            "__v": 0,
            "passwordChangedAt": "2020-06-22T19:35:47.476Z"
         }
      }
  }
  ```

### :large_blue_diamond: I have a question. Where should I ask? :thinking:

If you have any query, feature request or if you find any kind of bug :beetle: in our site please let us know by simply opening a issue [here](https://github.com/pro-js/node-reset-password-with-fresh-jwt-token-api/issues).

### :large_blue_diamond: Can I contribute in this project? :smiley:

Of course you can. It is an open source project. If you want to contribute with us follow the procedures -

- Fork the repository in your github account.
- Clone it in your local and do the changes you want.
- Make a PR with proper documentation of what you did as they say _Lack of proper documentation is becoming a problem for acceptence_ :wink:

### :large_blue_diamond: Contributor :nerd_face:
Contributors who have worked hard to keep this application up to date are -
- [Jinnatul Islam Morol](https://www.facebook.com/mdjinnatul.islam)

### :large_blue_diamond: License and copyright
©[Morol](https://github.com/jinnatul) & This project is licensed under the terms of the MIT license.

### If you happen to like our work please give a star :star: on the repository
 
