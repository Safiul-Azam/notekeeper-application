import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase';

const DeleteNote = ({id}) => {
    const handleDelete =async (id)=>{
        
 await deleteDoc(doc(db, "Notes", `${id}`));

    }
    return (
        <div>
            <button onClick={()=>handleDelete(id)} className='btn btn-danger' >Delete</button>
        </div>
    );
};

export default DeleteNote;