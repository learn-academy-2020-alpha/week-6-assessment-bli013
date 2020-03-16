# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: animal_id would be the forign key, and would be in the sighting model as the sightings model belong to a specific animal. 

  Researched answer: A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables.



2. Which routes must always be passed params and why?

  Your answer: creating routes, they must always be passed in params because if there were no params, then the data base could be full of errors, making the data base useless.

  Researched answer: The params in a controller looks like a Hash, but it's actually an instance of ActionController::Parameters , which provides several methods such as require and permit .



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer: get './game/guess' => 'main#game'



4. Name three rails generator commands. What is created by each?

  Your answer: 1.controller, where methods live. 2.migration, this allows a new migration to be added in. 3.model, this allows a new model to be generated. 

  Researched answer: Installed Generators
  Built-in: controller, integration_test, mailer, migration, model, observer, performance_test, plugin, resource, scaffold, session_migration



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   will show all the users

/users/1      method="GET"   will show just the user with the id of 1

/users/new    method="GET"   will show the new user or an error message for not entering a propper param

/users/       method="POST"  will create a new user   

/users/1      method="PUT"   will be able to update the existing user info for id of 1

/users/1      method="DELETE" will destroy the information on user with the id of 1
