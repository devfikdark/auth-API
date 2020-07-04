# NodeJs Authentications


## Google authentication

### Development dependencies

- [dotenv](https://www.npmjs.com/package/dotenv) - use for access .env file data (process.env)
- [express](https://www.npmjs.com/package/express) - use for nodejs web framwork
- [mongoose](https://www.npmjs.com/package/mongoose) - use for DB related work
- [nodemon](https://www.npmjs.com/package/nodemon) - use for automatically restarting the node application
- [passport](https://www.npmjs.com/package/passport) - use for nodeJs authentication
- [passport-google-oauth20](https://www.npmjs.com/package/passport-google-oauth20) - use for Google 0auth
  

### Routes
- Api call for google authentication
  - http://localhost:3000/auth/google
- Api call back function
  - http://localhost:3000/auth/google/callback

### Google send response :heart:
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
 

