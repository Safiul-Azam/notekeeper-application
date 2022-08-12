import { doc, setDoc, Timestamp } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { uid } from 'uid';
import { db, storage } from '../firebase';

const AddNotes = () => {
  const [formData, setFormData] = useState({
    title: '',
    note: '',
    createdAt: Timestamp.now().toDate()
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.title || !formData.note) {
      toast('please fill all input field')
      return;
    } else {
      const uuid = uid()
      await setDoc(doc(db, "Notes", `${uuid}`), {
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
    <div className='w-50 mx-auto mt-4  border p-4'>
      <h3 className='text-center'>Add a Note</h3>
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
          Add A Note
        </Button>
      </Form>
    </div>
  );
};

export default AddNotes;