import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase';
import { FaTrashAlt } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const DeleteNote = ({ id }) => {
    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "Notes", `${id}`));
        toast.success('Successfully the note is deleted')
    }
    return (
        <div>
            <Button variant="" onClick={() => handleDelete(id)}>
                <FaTrashAlt className='fs-5 text-danger' />
            </Button>
        </div >
    );
};

export default DeleteNote;