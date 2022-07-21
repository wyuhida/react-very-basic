import React, { Component } from 'react'
import axios from 'axios';

class Profile extends Component{
    state = {
        title:'',
        body:'',
    }

    formSubmit = (e) => {
        e.preventDefault();
        axios.post('/user', {
            title:this.state.title,
            body:this.state.body
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render(){
        return(
            <div>
                <center>
                <div class="jumbotron col-lg-4">
                    <form onSubmit={this.formSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Title {this.state.title}</label>
                            <input type="text" 
                            class="form-control" 
                            id="title" name="title" 
                            required
                            onChange={event => {this.setState({title:event.target.value})}}
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Details {this.state.body}</label>
                            <textarea class="form-control" 
                            name="body" 
                            id="body"
                            onChange={event => {this.setState({body:event.target.value})}}
                            >Write here</textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Publish</button>
                    </form>
                </div>
                </center>
               

            </div>
        )
    }
}

export default Profile
