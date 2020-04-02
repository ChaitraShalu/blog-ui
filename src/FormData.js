import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class FormData extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
            posts:[]
        }
    }
    componentDidMount(){
        const id= this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/`)
        .then((response)=>{
            const users= response.data
            this.setState({users})
            axios.get(`http://jsonplaceholder.typicode.com/posts/1`)
        .then((response)=>{
            const posts= response.data
            this.setState({posts})
        })
        
        })
        .catch((err)=>{
            console.log(err)
        })
        

    }


        render(){
        return(
            <div>
                <h2>giv</h2>
                <ul>
                    {this.state.users.map(user=>{
                        return <li>{user.email}</li>
                    })}
                </ul>



            </div>
        )
    }
}


export default FormData