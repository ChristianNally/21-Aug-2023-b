# W05D05 - Mid-term Project Kickoff

### Midterms, Why?
* prepare for the real world!
* best way to practice
* reinforces what you've learned
* practice working as a team

### Pick a Project

### User Stories
* describe what a user can and cannot do
* As a _____, I can _____, because ______

* As a logged in user, I can be added to an organization, because I want to be part of a team
* As a logged in user, I can create a map, because I want to share things in my area
* As a non logged in user, I can see maps in my area, because I'm interested in what's around me
* As a non logged in user, I cannot edit the pins on a map, because it doesn't belong to me

/planning/user-stories.md

### Resources/Nouns
* nouns === tables
* ERD
* lowest fidelity possible

/planning/erd.png
/planning/erd-stretch.png

### Endpoints
* create RESTful endpoints
* REpresentational State Transfer

GET /all-the-maps
GET /a-particular-map-by-id/:id

Browse  GET   /dinosaurs
Read    GET   /dinosaurs/:id
Edit    POST  /dinosaurs/:id
Add     POST  /dinosaurs
Delete  POST  /dinosaurs/:id/delete

GET /users/:id/maps
GET /videos/:id/comments

PUT - replace a resource completely
PATCH - replace a piece of a resource
DELETE - deletes a resource

Browse  GET      /dinosaurs
Read    GET      /dinosaurs/:id
Edit    PATCH    /dinosaurs/:id
Add     POST     /dinosaurs
Delete  DELETE   /dinosaurs/:id

### MVP
* Minimum Viable Product




























