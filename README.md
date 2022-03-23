# Stream Flex
Stream Flex is an Indian subscription based streaming website which is build using various Api's and apps. The movie, its images and other information is stored in Aws Amplify. Heroku was used to host the website in the internet. Google Firebase was used for authentication and keeping a record of the users subscription. Stripe was used for payment processing for the subscription which is linked with Google firebase to store those info with the relvent users. 

## How to run it?
This website cannot be run because I have removed Aws, Heroku, Firebase and stripe api keys from the application before submiting it to github for confidentiality reasons. 

## Key featuers of the website
- Authentication of user based on their subscription. 
- Not allowing users to browse movies without subscription.
- Getting images and movies from Aws amplify and Displaying them to the website.
- Changing screens depending on the movie the user have selected to watch.
- Not allowing to download or right click while watching the movie.
- Having a user page where all the relvent user information is stored and their subscriptions.
- Lets the user know what is their current subscription.
- Alows the user to cancel and update their subscription and their info after clicking on the current subscription.

## Softwares and Apps used for the website
- Amazon Web Services - S3, Lambda, MediaConvert. Used for Storing Images, Movies and other misc.
- Heroku - Used for hosting the Website.
- Google Firebase - Used for Auth, store user information and store their payment details.
- Stripe - Used for payments and to update user info.

## Screenshot 
#### Login Screen
<img src="https://github.com/Sooryasanand/Indian-Streaming-Service/blob/main/Screenshot/Screen%20Shot%202022-03-07%20at%2011.52.04%20am.png" width="500" height="300">

#### Home Screen
<img src="https://github.com/Sooryasanand/Indian-Streaming-Service/blob/main/Screenshot/Screen%20Shot%202022-03-07%20at%2011.52.12%20am.png" width="500" height="300">

#### Profile Screen
<img src="https://github.com/Sooryasanand/Indian-Streaming-Service/blob/main/Screenshot/Screen%20Shot%202022-03-07%20at%2011.52.21%20am.png" width="500" height="300">

#### Movie Info Screen
<img src="https://github.com/Sooryasanand/Indian-Streaming-Service/blob/main/Screenshot/Screen%20Shot%202022-03-07%20at%2011.52.27%20am.png" width="500" height="300">

#### Movie Player Screen
<img src="https://github.com/Sooryasanand/Indian-Streaming-Service/blob/main/Screenshot/Screen%20Shot%202022-03-07%20at%2011.52.39%20am.png" width="500" height="300">

## License
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

