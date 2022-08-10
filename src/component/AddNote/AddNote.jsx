import React from 'react';
import { toast } from 'react-toastify';
import './AddNote.css'
import { db } from '../../firebase';
import { ref, set } from 'firebase/database';
import { uid } from 'uid';
import { useRef } from 'react';


const AddNote = () => {
    const titleRef = useRef('')
    const noteRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const title = titleRef.current.value
        const note = noteRef.current.value
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
            title,
            note,
            uuid
        });
        titleRef.current.value = ''
        noteRef.current.value = ''
    }
    return (
        <div className='form-container'>
            <h2>Add A Note</h2>
            <form className='note-form' onSubmit={handleSubmit}>
                <input ref={titleRef} type="text" name="title" id="title" placeholder='Title' />
                <textarea ref={noteRef} type="text" name="note" id="" placeholder='Write A Note'></textarea>
                <input className='add-btn' type="submit" value="ADD NOTE" />
            </form>
        </div>
    );
};

export default AddNote;