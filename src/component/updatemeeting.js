import '../App.css';
import { Component , useState, useEffect} from 'react';

const UpdateMeeting = ({onUpdate, complete, id}) => {
    const [title, setTitle] = useState("")
    const [day, setDay] = useState("")
    const [textInfor, setTextInfor] = useState("")
    const [important, setImportant] = useState(false)
    const [titleMessage, setTitleMessage] = useState("")
    const [dayMessage, setDayMessage] = useState("")
    const [textInforMessage, setTextInforMessage] = useState("")

    const submit = (e) => {
        e.preventDefault()
        let valid = true
        if (title.trim() == "" || title.trim().length > 30) {
            setTitleMessage("Please enter a valid title!")
            valid = false
        }
        if (textInfor.trim() == "" || !(textInfor.includes("zoom"))) {
            setTextInforMessage("Please enter a valid link!")
            valid = false
        }
        if (new Date(day) < new Date()) {
            setDayMessage("Please enter a valid date time!")
            valid = false
        }
        if (!valid) {
            return
        }
        let task = {"id": id,
                "title": title,
                "day": day,
                "textInfor": textInfor,
                "important": important}
        onUpdate(task)
        complete()
    }

    return (
        <div className="add-meeting">
            <form className='add-form' onSubmit={submit}>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Add Task'
                value={title} onChange={(e) => {setTitle(e.target.value)
                                                setTitleMessage("")}}
                />
                <div className="message">{titleMessage}</div>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='datetime-local'
                value={day} onChange={(e) => {setDay(e.target.value)
                                                setDayMessage("")}}
                />
                <div className="message">{dayMessage}</div>
            </div>
            <div className='form-control'>
                <label>Zoom Link</label>
                <input type="url" placeholder='Zoom link to the meeting'
                value={textInfor} onChange={(e) => {setTextInfor(e.target.value)
                                            setTextInforMessage("")}}
                />
                <div className="message">{textInforMessage}</div>
            </div>
            <div className='form-control form-control-check'>
                <label>Important</label>
                <input type='checkbox' checked={important}
                value={important} onChange={(e) => setImportant(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Information' className='btn btn-block'/>
            </form>
        </div>
    )

}


export default UpdateMeeting