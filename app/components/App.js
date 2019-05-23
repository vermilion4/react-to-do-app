import React from 'react';

export class App extends React.Component{
    render() {
        return (
            <div>
        <h1>Welcome To TO-DO App</h1>
        <p>Task Name: </p>
        <p>Task Description: </p>
        <p>Reminder Time: </p>
        <p>Completion Time: </p>
        <p>Completed?: Yes<input type = "checkbox" name="complete" /> </p>
        </div>
        )
    }
}