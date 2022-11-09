# Project2 - AJAK

This is a platform where sports players can search for their missing pieces(players) for their sports game. This idea came when my friends who have weekly futsal game are always on the look for the remaining one or two players to fill their team before they can start their game. Therefore, this app helps to allow other sports players to know of sports games organized and connect with sports players who are of similar interest.

Technologies:
<ul>
  <li>Node.js</li>
  <li>Mongoose</li>
  <li>Express</li>
  <li>Express JS(EJS)</li>
  <li>Javascript</li>
  <li>EJS Partials</li>
  <li>Heroku</li>
  <li>Method-Override</li>
  <li>Express-Session</li>
  <li>Bcrypt</li>
</ul>
  
Approach taken: <br/>
This app encompasses the RESTful routes and full CRUD operations where users get to create, read, update and delete data. The routes to the pages are accessbile via controllers by rendering the ejs pages. The homepage is where all the posts are listed, with buttons to create a new post or view more on specific post. Express-sessions is installed for creating users, log in and log out of the page as the app is only available for registered users, non-registered users can only view the post but not create or sign up for games. For the update and delete part, only the user who created the post gets to edit and delete. Other users will be able to join game instead once inside the post, and it will lead them to a new page where the creator's email will be shown for the interested player to get in touch.

Missing features/unsolved problems:
<ol>
  
  <li>Would like to have the users to connect(join game) without having to show personal data(email), so maybe having a chat room on the application itself would be easier where the creator gets notified quicker</li>
  <li>Authorisation flow for creator to approve players/ edit remaining players needed</li>
  <li>Add sorting features such as types of sports, location, level of difficulty for users (if they are beginner, moderate or advanced level), and the date created for the posts so that posts with dates that are coming soon will appear at the top</li>
  <li>Posts with expired date will get deleted within a time frame without having the creator to manually delete</li>
  <li>Add more information in the page such as news revolving sports</li>
 </ol>
<br/>

The app is accessible here: https://ajak-sei.herokuapp.com/game
