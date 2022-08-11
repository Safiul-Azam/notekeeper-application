import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddNotes = () => {
    return (
        <div className='w-50 mx-auto mt-4  border p-4'>
            <h3 className='text-center'>Add a Note</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Write title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Note</Form.Label>
                    <Form.Control type="text" as="textarea" placeholder="Write your Note" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add A Note
                </Button>
            </Form>
        </div>
    );
};

export default AddNotes;