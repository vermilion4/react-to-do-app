import React from 'react';

export class Delete extends React.Component{
    constructor(props){
        super(props);
    }

async deleteProfile (){
    var url="https://to-do-express-app.herokuapp.com/delete/5cd3f4fdf81ec05a78f69388"
    var deleteFetch = await fetch(url, {
        method: "DELETE",
        headers: {
        'Content-Type' : 'application/json'},
        body:JSON.stringify({
        })
        
    })
    var response = await deleteFetch
    var res = await response.json()
    console.log(res)
}
render() {
    return <button onClick={()=>this.deleteProfile()}>Delete Profile</button>
}
}