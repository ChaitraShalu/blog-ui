import React from 'react' 
import TaskTable from './TaskTable'

class TaskList extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: [
                { id: 1, title: 'develop ui', completed: true },
                { id: 2, title: 'develop app', completed: false },
                { id: 3, title: 'take client features', completed: true }
            ]
        }
    }

    render() {
        return (
            <div>
                <h2>Listings Tasks - {this.state.tasks.length} </h2>
                <TaskTable tasks={this.state.tasks} />
            </div>
        )
    }
}

export default TaskList