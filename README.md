## Description
Duration: 3 days

This is a mock-up of a feedback system that students could use to give instuctors feedback on their experience in class.

##Installation

1. Create a database named "prime_feedback",
2. The queries in the data.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly.
3. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
4. Open up your editor of choice and run an npm install
5. Run npm run server in your terminal
6. Run npm run client in your terminal
7. The npm run client command will open up a new browser tab for you!

##Usage

1. Travel through each screen giving a 1-10 rating for each category based on how your class room experience is
2. Can use back buttons to change previous answers
3. using the /admin path for the URL will take user to admin page where all feedback can be viewed by the admin as well as giving the ability to delete entries

#Built With
React, Redux, Redux-Sagas, PostgreSQL, Node.js, Express

##Acknowledgement
Thanks to Prime Digital Academy in Minneapolis who equipped and helped me to make this application a reality.