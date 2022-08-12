import { collection, doc, getDoc, onSnapshot, orderBy, query, Timestamp, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import PinnedShow from './PinnedShow';
const PinnedNote = ({ note }) => {
    const [loading, setLoading] = useState(false)
    const [pinnedData, setPinnedData] = useState({})

    const handlePinned = async () => {
        const docRef = doc(db, "Notes", `${note}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const data = docSnap.data()
            await updateDoc(doc(db, "Notes", `${note}`), {
                pinned: true,
                createdAt: Timestamp.now().toDate()
            });
            setPinnedData(data)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    return (
        <div>
            <button onClick={handlePinned}></button>
            <PinnedShow pinnedData={pinnedData}></PinnedShow>
        </div>
    );
};

export default PinnedNote;