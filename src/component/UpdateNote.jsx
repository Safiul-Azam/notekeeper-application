import { doc, updateDoc, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { FiEdit } from "react-icons/fi";

const UpdateNote = ({ id }) => {
    console.log(id);
    //modal state
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //form state
    const [formData, setFormData] = useState({
        title: '',
        note: '',
        createdAt: Timestamp.now().toDate()
    })
    //handle change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    //submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.title || !formData.note) {
            toast('please fill all input field')
            return;
        } else {
            await updateDoc(doc(db, "Notes", `${id}`), {
                title: e.target.title.value,
                note: e.target.note.value,
                createdAt: Timestamp.now().toDate()
            });
            toast('added a new note')
            e.target.title.value = ''
            e.target.note.value = ''
        }
    }
    return (
        <div>
            <Button variant="" onClick={() => handleShow(id)}>
               <FiEdit className='fs-5 text-info'/>
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Note Id: {id}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='w-100 mx-auto mt-4 p-4'>
                    <h3 className='text-center'>Update Note</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Title</Form.Label>
                            <Form.Control name='title' onChange={handleChange} value={formData.title} type="text" placeholder="Write title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Note</Form.Label>
                            <Form.Control name='note' onChange={handleChange} value={formData.note} type="text" as="textarea" placeholder="Write your Note" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update Note
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>
    );
};

export default UpdateNote;