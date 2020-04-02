import React from 'react'

import Login from './Login'
import FormData from './FormData'

import {BrowserRouter, Route, Link} from 'react-router-dom'

function App (props){
    return(
            <BrowserRouter>
                    <div>

                        
                        
                        {/*
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/task">Task</Link>
                        */
                        }

                        
                        {
                            /*
                            <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/task" component={Task}/>
                        */
                        }
                         
                         <Link to='formdata'>FormData</Link>
                        

                        <Route path="/" component={Login} exact={true}/>
                        <Route path="/formdata" component={FormData} exact={true}/>



                        { /*
                        <Greeting/>
                        <TaskList/>
                        <UsersList/>

                        */ }

                    </div>
            </BrowserRouter>

    )
}
export default App