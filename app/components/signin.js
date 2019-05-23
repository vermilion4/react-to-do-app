import React from 'react';

export class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            username: '',
            password: '',
            disable:true
           
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.logIn = this.logIn.bind(this)
    }
    async logIn (username, password){
        var url="https://to-do-express-app.herokuapp.com/login"
        await fetch(url, {
            method: "POST",
            headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'},
            body:JSON.stringify({
                username,
                password, 
            })
        })
        .then(res => res.text())          // convert to plain text
  .then(text => console.log(text))
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
        return(
        
                <div>
                    <p>{this.state.errMessage}</p>
                <p>Username: <input type = "text" placeholder = "Enter Username" name = "username"  onChange={this.handleUsername} value={this.state.username}/></p>
                <p>Password: <input type = "password" placeholder = "Enter Password" name = "password" onChange={this.handlePassword}value={this.state.password}/></p>
                <button onClick={()=>this.logIn(this.state.username, this.state.password)} disabled={this.state.disable}>Log In</button>
            </div>
            
        
        );
    }
}
