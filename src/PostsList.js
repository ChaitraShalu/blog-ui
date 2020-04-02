import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostsList extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        const id= this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then((response)=>{
            console.log(response.data)
            const posts= response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                
                
                <h3>Total posts: {this.state.posts.length}</h3>
                <ul>
                    {this.state.posts.map(post=>{
                        return <li key={post.id}>{post.title}</li>
                    })}
                </ul>

            </div>
        )
    }
}
export default PostsList