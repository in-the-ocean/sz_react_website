import '../App.css';
import { Component , useState, useEffect} from 'react';
import Task from './task.js'

const MeetingList = ({onUpdate, onDelete, tasks}) => {
    const [show, setShow] = useState(false)
    console.log(tasks)

    return (
        <div className="meeting-container">
            {tasks.length > 0 ? tasks.map((task) => (
                <Task key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete}/>
            )) : <div style={{textAlign: "center", fontSize: "large"}}>No available meeting</div>}
        </div>
    )

}


export default MeetingList