import React from 'react';
import DeleteNote from './DeleteNote';
import PinnedNote from './PinnedNote';
import UpdateNote from './UpdateNote';

const PinnedShow = ({ pinnedData, pinned }) => {
    console.log(pinnedData);
    return (
        <div>
          { pinned &&  <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title text-danger fs-4">{pinnedData.title}</h5>
                    <p class="card-text">{pinnedData.note}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">{pinnedData.createdAt.toDate().toDateString()}</small>
                </div>
                <div className="d-flex justify-content-center p-1">
                    <DeleteNote id={pinnedData.id}></DeleteNote>
                    <UpdateNote id={pinnedData.id}></UpdateNote>
                    <PinnedNote note={pinnedData.id}></PinnedNote>
                </div>
            </div>}
        </div>
    );
};

export default PinnedShow;