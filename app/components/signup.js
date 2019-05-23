import React from 'react';

export class SignUp extends React.Component{
    render() {
        return(
           
            <form>
                <p>FirstName: <input type = "text" placeholder = "Enter Firstname" name = "fname"/></p>
                <p>LastName: <input type = "text" placeholder = "Enter Lastname" name = "lname"/></p>
                <p>Username: <input type = "text" placeholder = "Enter Username" name = "username"/></p>
                <p>Password: <input type = "password" placeholder = "Enter Password" name = "password"/></p>
                <p>Bio: <input type = "text" placeholder = "Enter Bio" name = "bio"/></p>
                <p>Email: <input type = "email" placeholder = "Enter Email" name = "email"/></p>
                <p>Gender: Male <input type = "radio"  name = "sex"/>
                           Female <input type = "radio"  name = "sex"/></p>
                <p>PhoneNumber: <input type = "text" placeholder = "Enter PhoneNumber" name = "number"/></p>  
                <p>Address: <input type = "text" placeholder = "Enter Address" name = "address"/></p>    
                <p>State: <input type = "text" placeholder = "Enter State" name = "state"/></p>     
                <button>Sign Up</button>
            </form>
             
             
        )
    }
}
