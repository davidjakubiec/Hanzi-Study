import React from 'react';
import DragAndDropComponent from './DragAndDropComponent';

export function App() {
    return (
        <div>
            <h1> Welcome { new Date().toString() } </h1>
            <DragAndDropComponent/>
        </div>
    );
};