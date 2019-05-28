import React from 'react'
import PropTypes from 'prop-types';

export class SignupView extends React.Component{
    render() {
        return(
            <div>
            <p>FirstName: <input type = "text" placeholder = "Enter Firstname" name = "firstName" value={this.props.firstName} onChange={this.props.handleFirstname}/></p>
            <p>LastName: <input type = "text" placeholder = "Enter Lastname" name = "lastName" value={this.props.lastName} onChange={this.props.handleLastname}/></p>
            <p>Username: <input type = "text" placeholder = "Enter Username" name = "userName" value={this.props.username} onChange={this.props.handleUsername}/></p>
            <p>Password: <input type = "password" placeholder = "Enter Password" name = "password" value={this.props.password} onChange={this.props.handlePassword}/></p>
            <p>Bio: <input type = "text" placeholder = "Enter Bio" name = "bio" value={this.props.bio} onChange={this.props.handleBio}/></p>
            <p>Email: <input type = "email" placeholder = "Enter Email" name = "email" value={this.props.email} onChange={this.props.handleEmail}/></p>
            <p>Gender: <input type = "text" placeholder = "Enter Gender" name = "gender" value={this.props.gender} onChange={this.props.handleGender}/></p>
            <p>PhoneNumber: <input type = "text" placeholder = "Enter PhoneNumber" name = "phoneNumber" value={this.props.phoneNumber} onChange={this.props.handlePhonenumber}/></p>  
            <p>Address: <input type = "text" placeholder = "Enter Address" name = "address" value={this.props.address} onChange={this.props.handleAddress}/></p>    
            <p>State: <input type = "text" placeholder = "Enter State" name = "state" value={this.props.props} onChange={this.props.handleState}/></p>     
            <button onClick={()=>this.signUp ( this.props.firstName,this.props.lastName,this.props.username,this.props.password,
            this.props.bio,this.props.email,this.props.gender,this.props.phoneNumber,this.props.address,this.props.state)} 
            disabled={this.props.disable}>Sign Up</button>
        </div>
        )
    }
}

SignupView.propTypes = {
    firstName:PropTypes.string.isrequired,
    lastName:PropTypes.string.isrequired,
    password : PropTypes.string.isrequired,
    username : PropTypes.string.isrequired,
    bio:PropTypes.string.isrequired,
    email:PropTypes.string.isrequired,
    gender:PropTypes.string.isrequired,
    phoneNumber:PropTypes.string.isrequired,
    address:PropTypes.string.isrequired,
    state:PropTypes.string.isrequired,
    handleFirstname : PropTypes.func.isrequired,
    handleLastname : PropTypes.func.isrequired,
    handlePassword : PropTypes.func.isrequired,
    handleUsername : PropTypes.func.isrequired,
    handleBio : PropTypes.func.isrequired,
    handleEmail : PropTypes.func.isrequired,
    handleGender : PropTypes.func.isrequired,
    handlePhonenumber : PropTypes.func.isrequired,
    handleAddress : PropTypes.func.isrequired,
    handleState : PropTypes.func.isrequired,
    disable : PropTypes.bool.isrequired,
    errMessage : PropTypes.string.isrequired,
    logIn : PropTypes.func.isrequired
}