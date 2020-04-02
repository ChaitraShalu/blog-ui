import React from 'react' 

function TaskTable(props) {
    return (
        <table border="1">
            <thead>
                <tr>
                    <th> # </th>
                    <th> title </th>
                    <th> status </th>
                </tr>
            </thead>
            <tbody>
                {
                    props.tasks.map(function (ele) {
                        return (
                            <tr key={ele.id}>
                                <td> {ele.id} </td>
                                <td> {ele.title} </td>
                                <td>
                                    <input type="checkbox" checked={ele.completed} />
                                    {ele.completed ? 'completed' : 'on-going'} </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}   

export default TaskTable