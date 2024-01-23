# Note-Generator

## Description
This is a simple note-taking application that allowd users to create, save, view, and delete notes. 
The application allows user to interact with the responsive buttons for user experience. 
Users can also send a GET HTTP request to view the all of the notes objects with a unique note id. 




## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies-Used](#technologies-used)
- [Contribution](#contribution)
- [Preview](#preview)
- [Link](#link)
- [Contact](#contact)

## Installation 
To install necessary dependencies, run following command:
```
npm i

```

## Usage
1. Open the application in a web browser 
2. if running this application using 
``` 
node server.js
```
go to (http://localhost:3001)
3. Click the Get Started button to navigate to the '/notes' path.
4. Use the form to create and save notes
5. Delete notes by clicking the trash icon next to each note in the left section.



## Features

## Create and Save Notes
### User Story
As a note taker,
I WANT to be able to create a note when I navigate to the '/notes' path
So That I can start taking a note

As a note taker, 
I WANT to be able to save my note 
So That I can view all of the create notes whenever I visit the application 

### Accepted Criteria
- When I click "Get Stated" button
- Then I am navigated to the main note taker page
- When I complete typing the note title and context
- Then the "Save Note" button appears 
- When I hit the "Save Note" button, 
- Then the newly generated note is saved in the notes json object, and it is added to the note history 

## Delete Notes
### User Story
As a Note taker, 
I WANT to be able to deleted the listed note items 
So That I can delete the item when I no longer need the note 

### Accepted Criteria
- When I view the listed note items in the left sidebar 
- Then I can see the trash icon next to the note title of each items.
- When I click the trash icon
- Then I the corresponding note item disappears from the list 
- When I send a GET request to '/api/notes' path
- Then I view that the disappeared note item is also deleted from the json objects



## Technologies-Used
JavaScript,CSS,HTML,Express,Node.js


## Contribution 
1. Fork the Repo 
2. Create a new branch 
3. Make your contributions/changes 
4. push to the forked repo 
5. create a new pull request


## Preview 

This is the preview of the application 
![alt preview](./Develop/img/screen-recording.gif)

## Link

This is the link to the application
[alt preview]()

## Contact

If you have any questions or suggestions regarding this project, feel free to reach out:

- **Email:** ks02ks2000@gmail.com
- **GitHub:** lucyJihyeon(https://github.com/lucyJihyeon)

