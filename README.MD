# NodeJs Authentications

### Common dependencies

- [dotenv](https://www.npmjs.com/package/dotenv) - use for access .env file data (process.env)
- [express](https://www.npmjs.com/package/express) - use for nodejs web framwork
- [mongoose](https://www.npmjs.com/package/mongoose) - use for DB related work
- [nodemon](https://www.npmjs.com/package/nodemon) - use for automatically restarting the node application


## Google authentication

### Development dependencies

- [passport](https://www.npmjs.com/package/passport) - use for nodeJs authentication
- [passport-google-oauth20](https://www.npmjs.com/package/passport-google-oauth20) - use for Google 0auth
  

### Routes
- Home Pgae
  - https://pro-authapi.herokuapp.com
- Api call for google authentication
  - https://pro-authapi.herokuapp.com/auth/google
- Api call back function
  - https://pro-authapi.herokuapp.com/profile
  
- **Home Page**  
![social-auth](https://user-images.githubusercontent.com/31995155/87836241-3dcf8c00-c8b1-11ea-9311-43a9914ebca7.png)

- **Profile Page with Google Data**
![google-auth](https://user-images.githubusercontent.com/31995155/87836242-3dcf8c00-c8b1-11ea-82f6-8ee3c88d3702.png)


- **Google send response :heart:**
```js
{ 
  id: '107452959910700861566',
  displayName: 'programming blog',
  name: { familyName: 'blog', givenName: 'programming' },
  emails: [ { value: 'morolswediu@gmail.com', verified: true } ],
  photos: 
   [ { value: 'https://lh3.googleusercontent.com/a-/AOh14Gg549u3HbJaMt1LysTH_yjQlPb_dIvuR9Ys6pukUQ' } ],
  provider: 'google',
  _raw: '...',
  _json: 
   { sub: '107452959910700861566',
     name: 'programming blog',
     given_name: 'programming',
     family_name: 'blog',
     picture: 'https://lh3.googleusercontent.com/a-/AOh14Gg549u3HbJaMt1LysTH_yjQlPb_dIvuR9Ys6pukUQ',
     email: 'morolswediu@gmail.com',
     email_verified: true,
     locale: 'en' 
    } 
}
```
 

## Facebook authentication

### Development dependencies

- [passport](https://www.npmjs.com/package/passport) - use for nodeJs authentication
- [passport-facebook](https://www.npmjs.com/package/passport-facebook) - use for Facebook auth

### Routes
- Api call for facebook authentication
  - http://localhost:3000/auth/facebook
- Api call back function
  - http://localhost:3000/auth/facebook/callback
