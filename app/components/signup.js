import React from 'react';
import {SignupView} from './view/signin';
import { App } from './App';

export class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            bio: '',
            email: '',
            gender: '',
            phoneNumber: '',
            address: '',
            state: '',
            disable:true,
           isSignup:true,
           isHome:false
        }
        this.handleFirstname = this.handleFirstname.bind(this)
        this.handleLastname = this.handleLastname.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleBio = this.handleBio.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleGender = this.handleGender.bind(this)
        this.handlePhonenumber = this.handlePhonenumber.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
        this.handleState = this.handleState.bind(this)
        this.validateForm = this.validateForm.bind(this)
    }
    async signUp ( firstName,lastName,username,password,bio,email,gender,phoneNumber,address,state){
        var url="https://to-do-express-app.herokuapp.com/signup"
        var signUpFetch = await fetch(url, {
            method: "POST",
            headers: {
            'Content-Type' : 'application/json'},
            body:JSON.stringify({
                firstName,
                lastName,
                username,
                password,
                bio,
                email,
                gender,
                phoneNumber,
                address,
                state
            })
            
        })
        var response = await signUpFetch
        var res = await response.json()
        console.log(res)
        if(res.firstName && res.username){
            console.log("Registration successful")
            this.setState({
                isHome : true,
                isSignup: false
            })
            return <App />
        }
        else if(res.text){
            console.log(res.text)
        }
        else{
            this.setState({
                errMessage: "Error has occurred"
            })
        }
    }

    handleFirstname(firstName){
        if(firstName.target.value.length >0)
          {  this.setState({
                firstName: firstName.target.value
            }, this.validateForm)
            console.log(firstName.target.value)}
            else{
                this.setState({
                    errMessage:"firstname field cannot be empty"
                })
                
            }
        
}
handleLastname(lastName){
    if(lastName.target.value.length >0)
      {  this.setState({
            lastName: lastName.target.value
        }, this.validateForm)
        console.log(lastName.target.value)}
        else{
            this.setState({
                errMessage:"lastname field cannot be empty"
            })
            
        }
    
}
    handleUsername(username){
        if(username.target.value.length >0)
          {  this.setState({
                username: username.target.value
            }, this.validateForm)
            console.log(username.target.value)}
            else{
                this.setState({
                    errMessage:"Username field cannot be empty"
                })
                
            }
        
}

    handlePassword(password){
        if(password.target.value.length >0)
        {  this.setState({
              password: password.target.value
          }, this.validateForm)
          console.log(password.target.value)}
          else{
              this.setState({
                  errMessage:"Password field cannot be empty"
              })
              
          }
        
    }
    handleBio(bio){
        if(bio.target.value.length >0)
          {  this.setState({
               bio: bio.target.value
            }, this.validateForm)
            console.log(bio.target.value)}
            else{
                this.setState({
                    errMessage:"bio field cannot be empty"
                })
                
            }
        
}
handleEmail(email){
    if(email.target.value.length >0)
      {  this.setState({
            email: email.target.value
        }, this.validateForm)
        console.log(email.target.value)}
        else{
            this.setState({
                errMessage:"email field cannot be empty"
            })
            
        }
    
}
handleGender(gender){
    if(gender.target.value.length >0)
      {  this.setState({
            gender: gender.target.value
        }, this.validateForm)
        console.log(gender.target.value)}
        else{
            this.setState({
                errMessage:"gender field cannot be empty"
            })
            
        }
    
}
handlePhonenumber(phoneNumber){
    if(phoneNumber.target.value.length >0)
      {  this.setState({
            phoneNumber: phoneNumber.target.value
        }, this.validateForm)
        console.log(phoneNumber.target.value)}
        else{
            this.setState({
                errMessage:"phonenumber field cannot be empty"
            })
            
        }
    
}
handleAddress(address){
    if(address.target.value.length >0)
      {  this.setState({
            address: address.target.value
        }, this.validateForm)
        console.log(address.target.value)}
        else{
            this.setState({
                errMessage:"address field cannot be empty"
            })
            
        }
    
}
handleState(state){
    if(state.target.value.length >0)
      {  this.setState({
            state: state.target.value
        }, this.validateForm)
        console.log(state.target.value)}
        else{
            this.setState({
                errMessage:"state field cannot be empty"
            })
            
        }
    
}
validateForm() {
    if(this.state.firstName.length>0 &&this.state.lastName.length>0 &&this.state.username.length>0 && this.state.password.length>0 &&
        this.state.bio.length>0 &&this.state.email.length>0 &&this.state.gender.length>0 &&this.state.phoneNumber.length>0 &&
        this.state.address.length>0 &&this.state.state.length>0){
        this.setState({
            disable:false
        })
    }
}
      
    render() {
            if(this.state.isSignUp){
                return <SignupView 
                firstName= {this.state.firstName}
                lastName= {this.state.lastName}
                username= {this.state.username}
                password= {this.state.password}
                bio= {this.state.bio}
                email= {this.state.email}
                gender= {this.state.gender}
                phoneNumber= {this.state.phoneNumber}
                address= {this.state.address}
                state= {this.state.state}
                disable={this.state.disable}
                signUp={this.state.signUp}
                handleFirstname={this.state.handleFirstname}
                handleLastname={this.state.handleLastname}
                handleUsername={this.state.handleUsername}
                handlePassword={this.state.handlePassword}
                handleBio={this.state.handleBio}
                handleEmail={this.state.handleEmail}
                handleGender={this.state.handleGender}
                handlePhonenumber={this.state.handlePhonenumber}
                handleAddress={this.state.handleAddress}
                handleState={this.state.handleState}
                />
            }
                else if (this.state.isHome){
                    return <App />
                }
                else{
                    return <SignUp />
                }
        
    }
}
