import '../App.css';
import { Component , useState, useEffect} from 'react';
import AddMeeting from './addMeeting.js'
import MeetingList from './meetinglist.js'

const Meetingdata = () => {
    const [tasks, setTasks] = useState([])
    const [showadd, setShowadd] = useState(false)

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            // console.log(tasksFromServer)
            setTasks(tasksFromServer)
        }
        getTasks()
        // console.log(tasks)
    }, [])

    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }

    const addMeeting = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        const data = await res.json()

        setTasks([...tasks, data])
    }

    const updateMeeting = async (task) => {
        const res = await fetch(`http://localhost:5000/tasks//${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        const data = await res.json()
        setTasks(tasks.map((t) => t.id === task.id ? task : t))
    }

    const deleteMeeting = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
    <div className="meeting-body">
        <header className='header'>
        <h1>Zoom Meeting Manager</h1>
        </header>
        {showadd ? <AddMeeting onAdd={addMeeting}/> :
                   <MeetingList onUpdate={updateMeeting} onDelete={deleteMeeting} tasks={tasks}/>}
        <button type="button" id="Add-task" onClick={() => setShowadd(!showadd)}>{showadd ? "Full Schedule" : "Create Meeting"}</button>
    </div>
    );
}

export default Meetingdata 