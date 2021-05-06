import '../App.css';
import { Component , useState, useEffect} from 'react';
import UpdateMeeting from './updatemeeting.js'

const Task = ({task, onUpdate, onDelete}) => {
    const [showupdate, setShowupdate] = useState(false)

    return (
        <div className="meeting-holder" style={{background: task.important ? "#b2d6bb" : "#dddddd"}}>
            <div onDoubleClick={()=>setShowupdate(!showupdate)} style={{display: "flex"}}>
                <div style={{width: "80%"}}>
                    <h3>{task.title}
                    </h3>
                    <p>
                    {task.day}
                    </p>
                    <a href={task.textInfor}>
                    {task.textInfor}
                    </a>
                </div>
                <div id="button-holder" style={{flexGrow: 1}}>
                    <button type="button" id="delete-task" onClick={() => onDelete(task.id)}>delete</button>
                </div>
            </div>
            {showupdate && <UpdateMeeting onUpdate={onUpdate} complete={() => setShowupdate(!showupdate)} id={task.id}/>}
        </div>
    )

}


export default Task 