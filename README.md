# 3d-printing-forum
Full stack web application for a forum based on posts from the 3d printing community

# Description
This application was made in an effort to show my knowledge of backend, frontend and database
management. 
The backend is created in Java using Spring Boot and Spring Security. It consists of entities
for users and the posts they can make, API's for the needed requests and Spring Security Basic 
Auth for Security.
The database is set up with MySQL and connected to the backend through requested repositories.
The frontend is created with React.js, Tailwind.css and Redux.js.
The biggest challenge I had while working on this project was connecting the frontend with 
basic auth to the backend.

# Running the application
Since I used Intellij IDEA for coding my backend, it can be run from directly from the IDE.
The frontend can be started with the "$npm run start" command. The database also needs to be 
started for the application to work. Make sure to change the application.propperties in the backend
file with your credentials for MySQL database.

# Functionality for logged in user
![](Loggedin.gif)

# Functionality admin
![](Admin.gif)





