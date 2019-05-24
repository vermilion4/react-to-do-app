import React from 'react';

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
            disable:true
           
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
        return(
           
            <div>
                <p>FirstName: <input type = "text" placeholder = "Enter Firstname" name = "firstName" value={this.state.firstName} onChange={this.handleFirstname}/></p>
                <p>LastName: <input type = "text" placeholder = "Enter Lastname" name = "lastName" value={this.state.lastName} onChange={this.handleLastname}/></p>
                <p>Username: <input type = "text" placeholder = "Enter Username" name = "userName" value={this.state.username} onChange={this.handleUsername}/></p>
                <p>Password: <input type = "password" placeholder = "Enter Password" name = "password" value={this.state.password} onChange={this.handlePassword}/></p>
                <p>Bio: <input type = "text" placeholder = "Enter Bio" name = "bio" value={this.state.bio} onChange={this.handleBio}/></p>
                <p>Email: <input type = "email" placeholder = "Enter Email" name = "email" value={this.state.email} onChange={this.handleEmail}/></p>
                <p>Gender: <input type = "text" placeholder = "Enter Gender" name = "gender" value={this.state.gender} onChange={this.handleGender}/></p>
                <p>PhoneNumber: <input type = "text" placeholder = "Enter PhoneNumber" name = "phoneNumber" value={this.state.phoneNumber} onChange={this.handlePhonenumber}/></p>  
                <p>Address: <input type = "text" placeholder = "Enter Address" name = "address" value={this.state.address} onChange={this.handleAddress}/></p>    
                <p>State: <input type = "text" placeholder = "Enter State" name = "state" value={this.state.state} onChange={this.handleState}/></p>     
                <button onClick={()=>this.signUp ( this.state.firstName,this.state.lastName,this.state.username,this.state.password,
                this.state.bio,this.state.email,this.state.gender,this.state.phoneNumber,this.state.address,this.state.state)} 
                disabled={this.state.disable}>Sign Up</button>
            </div>
             
        )
    }
}
