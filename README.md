# Star Wars Application
This application wraps Star Wars REST API to GraphQL using Java's Spring Boot. The resultant GraphQL API is then consumed using an Angular application as the frontend


![Backend](https://github.com/ywalakamar/star-wars-app/actions/workflows/maven.yaml/badge.svg)
![Backend](https://github.com/ywalakamar/star-wars-app/actions/workflows/npm.yaml/badge.svg)

The appliction can be accessed via [Star Wars](https://star-wars-client-app.herokuapp.com/)

## Links
- [x] Pivotal Tracker Board: https://www.pivotaltracker.com/n/projects/2573311
- [x] Github Repository: https://github.com/ywalakamar/star-wars-app
- [x] Backend GraphQL API: https://star-wars-server-app.herokuapp.com/graphql
- [x] Frontend: https://star-wars-client-app.herokuapp.com/

## Technical Requirements
### General
- [x] Code Editor
- [x] Git v 2.3.6
- [x] Heroku

### Programming Languages
- [x] Java
- [x] Typescript
- [x] GraphQL
13.3.7
### Backend Tools
- [x] Java 17 LTS
- [x] Apache Maven 3.8.5
- [x] Spring Boot 2.7.0
- [x] GraphQL Java Kickstart 12
- [x] Lombok

### Frontend Tools
- [x] Node v16.15.0
- [x] NPM 8.5.5
- [x] Angular 13

## Demos
- Launch terminal in your computer
- Create a new folder and give it a name of your choice: ```mkdir XXXX```
- Navigate to the new folder: ```cd XXXX`
- Clone the github repository: ```git clone https://github.com/ywalakamar/star-wars-app.git```
- Navigate to the cloned repository: ```cd star-wars-app```

### Server
- Navigate to the ```server``` directory: ```cd server```
- From the terminal, execute: ```./mvnw spring-boot:run```
- Your server application will run. You should be able to see a beautiful presentation like below:

  ![Screenshot from 2022-06-06 18-46-24](https://user-images.githubusercontent.com/4771875/172196757-c61d09a6-1469-4883-8f2e-407c2b02423d.png)
  
- Your GraphQL API is now accessible locally via `http://localhost:8080/graphql`
- Use any API client to query the API endpoint as demonstrated below:

  ![Screenshot from 2022-06-06 19-01-52](https://user-images.githubusercontent.com/4771875/172199118-387c0389-e3b3-4198-91f3-2d7e3789d23b.png)


### Client
- For client or front end, navigate to the ```client``` directory: ```cd client```
- From the terminal, install dependencies by running: ```npm install```
- Launch the server by executing: ```npm start```
- Using your browser, access the frontend via the URL ```http://localhost:8080/```

![Screenshot from 2022-06-06 19-21-07](https://user-images.githubusercontent.com/4771875/172202488-769ad234-64d3-45e1-bbb9-f83d1d3da2b8.png)
