import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../firebase';
import DeleteNote from "./DeleteNote";
import Pagination from "./Pagination";
import PinnedNote from "./PinnedNote";
import UpdateNote from "./UpdateNote";

import { BsPin } from 'react-icons/bs'
import { Button } from "react-bootstrap";
const ShowNote = () => {
    const [notes, setNotes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [notesPerPage, setNotePerPage] = useState(6)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const notesRef = collection(db, "Notes");
        const q = query(notesRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const notes = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setNotes(notes);
            setLoading(false)
        });
    }, []);
    // pagination logic
    const indexOfLastNote = currentPage * notesPerPage
    const indexOfFirstNote = indexOfLastNote - notesPerPage
    const currentNote = notes.slice(indexOfFirstNote, indexOfLastNote)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className="container mx-auto my-5">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    notes.length === 0 ? (
                        loading ? <p className="text-center fs-3 text-warning">Loading....</p> : <p className="fs-1 text-warning">No notes have been added yet</p>
                    ) : (
                        currentNote.map((note) => <div class="col">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title text-success fs-4">{note.title}</h5>
                                    <p class="card-text">{note.note}</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">{note.createdAt.toDate().toDateString()}</small>
                                </div>
                                <div className="d-flex justify-content-center p-1">
                                    <DeleteNote id={note.id}></DeleteNote>
                                    <UpdateNote id={note.id}></UpdateNote>
                                </div>
                            </div>
                        </div>)
                    )
                }
            </div>

            <div className="d-flex justify-content-center mt-4">
                <Pagination notesPerPage={notesPerPage} totalNotes={notes.length} paginate={paginate}></Pagination>
            </div>

        </div>
    );
};

export default ShowNote;