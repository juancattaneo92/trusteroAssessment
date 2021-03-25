<h1 align="center">
<br>
<img src="https://github.com/juancattaneo92/trusteroAssessment/blob/main/app/assets/images/Screen%20Shot%202021-03-25%20at%201.58.54%20PM.png" width="600">
<br>
<h4 align="center">Welcome to Trustero To-Do List, where you can create, edit and delete lists, tasks and comments. Inside every List, you can create tasks and at every taks you can create comments </h4>

<h4 align="center">
<a href="#key-features">Built with</a> •
<a href="#key-features">Key Features</a> •
<a href="#future-key-features">Future Key Features</a> •
</h4>

<br>

## Built with

- Backend:
    - Ruby on Rails
    - PostgreSQL
- Frontend:
    - React-Redux
    - JavaScript
    - HTML & SCSS

## Key Features

- List View:
    - Users can create lists, and all the lists live in the main home page.
    - Every list can be created, edited and deleted.
    - Inside every list live its own task that can be created there.
    - Developing this features was a challenge, using Ruby on Rails made it easier to control the data, and my CRUD. The most complicated part was to control the amount of tasks by each list, where I focused on developing in the backend, give the work to the server side, instead of the client.
    <br>
- Task View:
    - Users can create tasks with name and description, each task can be created, edited and deleted. Each task live in its corresponding list.
    - Users can create comments at each individual task.
    - I encounter many issues nesting comments in tasks and tasks in lists, therefore, I worked it all in my controller in the backend, sending specific data to my actions and that allowed me to developed a ligther app in the frontend.
- Comments:
    - Users can create comments inside each task, each comment can be created, edited and deleted.

    <br>

## Future Key Features

- Finish the tasks' done and in progress button, I ran out of time to finish it .
- Allow users to create each list and task with its own color, addind color pallete API.
- Allow users to search for specific list or task, creating a seach bar and developed it in the backend
