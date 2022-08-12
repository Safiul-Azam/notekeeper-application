import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../firebase';
import DeleteNote from "./DeleteNote";
const ShowNote = () => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        const notesRef = collection(db, "Notes");
        const q = query(notesRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const notes = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNotes(notes);
        });
    }, []);

    return (
        <div class="container mx-auto mt-3 row row-cols-1 row-cols-md-3 g-2">
            {
                notes.length === 0 ? (
                    <p className="fs-1 text-warning">No notes have been added yet</p>
                ) : (
                    notes.map((note) => <div class="col">
                        <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{note.title}</h5>
                                    <p class="card-text">{note.note}</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">{note.createdAt.toDate().toDateString()}</small>
                                </div>
                                <DeleteNote id={note.id}></DeleteNote>
                        </div>
                    </div>)
                )
            }
        </div>
    );
};

export default ShowNote;