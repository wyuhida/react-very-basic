import React, { Component } from 'react'
// const axios = require('axios')
import axios from 'axios'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

class Blog extends Component{

    state={
        posts:[]
    }

    componentDidMount(){
        
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState({posts:response.data})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render(){

        const posts = this.state.posts;
        const allposts = posts.map((post,idx) => {
            return (
                <div>
                    <a key={idx}>{post.title}</a><br></br>
                    <p>{post.body}</p>
                </div>
            )
        });

        return(
            <div>
                <h1>blog</h1>
                <Link to="/writepost">Add new</Link>
                <div class="media">
                   
                    <div class="media-body text-center">
                       {allposts}
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog
