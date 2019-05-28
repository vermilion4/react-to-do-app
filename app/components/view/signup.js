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
            <p>State: <input type = "text" placeholder = "Enter State" name = "state" value={this.props.state} onChange={this.props.handleState}/></p>     
            <button onClick={()=>this.props.signUp ( this.props.firstName,this.props.lastName,this.props.username,this.props.password,
            this.props.bio,this.props.email,this.props.gender,this.props.phoneNumber,this.props.address,this.props.state)} 
            disabled={this.props.disable}>Sign Up</button>
        </div>
        )
    }
}

SignupView.propTypes = {
    firstName:PropTypes.string.isRequired,
    lastName:PropTypes.string.isRequired,
    password : PropTypes.string.isRequired,
    username : PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    gender:PropTypes.string.isRequired,
    phoneNumber:PropTypes.string.isRequired,
    address:PropTypes.string.isRequired,
    state:PropTypes.string.isRequired,
    handleFirstname : PropTypes.func,
    handleLastname : PropTypes.func,
    handlePassword : PropTypes.func,
    handleUsername : PropTypes.func,
    handleBio : PropTypes.func,
    handleEmail : PropTypes.func,
    handleGender : PropTypes.func,
    handlePhonenumber : PropTypes.func,
    handleAddress : PropTypes.func,
    handleState : PropTypes.func,
    disable : PropTypes.bool.isRequired,
    signUp : PropTypes.func
}