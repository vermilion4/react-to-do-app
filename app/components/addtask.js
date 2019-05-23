import React from 'react';

export class AddTask extends React.Component{
    render() {
        return(
            <form>
                <p>TaskName: <input type = "text" placeholder = "Enter Taskname" name = "tname"/></p>
                <p>Description: <textarea cols="20" rows="5">Enter task description </textarea></p>
                <p>Time: <input type = "date"  name = "date"/></p>
                <p>Completed?: Yes<input type = "checkbox" name="complete" /></p>
                <p>Reminder: <input type = "number" placeholder = "Reminder time in minutes" name = "reminder"/></p>
             
                <button>Add Task</button>
            </form>
        )
    }
}
