import { doc, setDoc, Timestamp } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { uid } from 'uid';
import { db, storage } from '../firebase';

const AddNotes = () => {
  const navigate = useNavigate()
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
      toast.error('please fill all input field')
      return;
    } else {
      const uuid = uid()
      await setDoc(doc(db, "Notes", `${uuid}`), {
        title: e.target.title.value,
        note: e.target.note.value,
        createdAt: Timestamp.now().toDate()
      });
      toast.success('Added a new note')
      navigate('/')
      e.target.title.value = ''
      e.target.note.value = ''
    }
  }
  return (
    <div className='w-50 mx-auto mt-4  border p-4'>
      <h4 className='text-center fs-2'>Add a Note</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Title</Form.Label>
          <Form.Control name='title' onChange={handleChange} value={formData.title} type="text" placeholder="Write title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Note</Form.Label>
          <Form.Control name='note' onChange={handleChange} value={formData.note} type="text" as="textarea" placeholder="Write your Note" />
        </Form.Group>
        <Button variant="success" type="submit">
          Add A Note
        </Button>
      </Form>
    </div>
  );
};

export default AddNotes;