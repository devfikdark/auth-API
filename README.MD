# NodeJs Authentications


## Google authentication

### Development dependencies

- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "mongoose": "^5.9.21",
- "passport": "^0.4.1",
- "passport-google-oauth20": "^2.0.0"

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
 

