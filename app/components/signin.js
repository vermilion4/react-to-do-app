import React from 'react';
import { Switch, Route, withRouter, Link }from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SigninView } from './view/signin';
import { SignUp } from './signup';
import { App } from './App';

export class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            username: '',
            password: '',
            disable:true,
            errMessage: '',
            isSignIn: true,
            isHome: false
           
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.logIn = this.logIn.bind(this)
    }


    async logIn (username, password){
        var url="https://to-do-express-app.herokuapp.com/login"
        var loginFetch = await fetch(url, {
            method: "POST",
            headers: {
            'Content-Type' : 'application/json'},
            body:JSON.stringify({
                username,
                password
            })
            
        })
        var response = await loginFetch
        var res = await response.json()
        console.log(res)
        if(res.username){
            console.log("Log in successful")
            this.setState({
                isHome : true,
                errMessage: '',
                isSignIn: false
            })
            return <App />
        }
        else if(res.text){
            console.log(res.text)
            this.setState({
                errMessage : res.text
            })
        }
        else{
            this.setState({
                errMessage: "Error has occurred"
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
    validateForm() {
        if(this.state.username.length>0 && this.state.password.length>0){
            this.setState({
                disable:false
            })
        }
    }
    render() {
        
            if(this.state.isSignIn){
                return <SigninView 
                    password={ this.state.password}
                    username= {this.state.username}
                    disable= { this.state.disable}
                    handlePassword= {this.handlePassword}
                    handleUsername = {this.handleUsername}
                    logIn= { this.logIn}
                    errMessage= { this.state.errMessage}
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
