import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import _ from 'lodash';

const App = () => {

  // nanoid is used here for random id given to the particular note

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '21/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '28/01/2021',
    },
    {
      id: nanoid(),
      text: 'This is my new note!',
      date: '30/05/2021',
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const newestToOldest = () => {
    const sorted = _.sortBy(notes, [function(o) { return o.date; }]).reverse();
    setNotes(sorted);

  }

  const oldestToNewest = () => {
    const sorted = _.sortBy(notes, [function(o) { return o.date; }]);
    setNotes(sorted)
  }
  return (
      <div>
        <div className='container'>
          <Header oldToNew={oldestToNewest} newToOld={newestToOldest} />
          <Search handleSearchNote={setSearchText} />
          <NotesList
              notes={notes.filter((note) =>
                  note.text.toLowerCase().includes(searchText)
              )}
              handleAddNote={addNote}
              handleDeleteNote={deleteNote}
          />
        </div>
      </div>
  );
};

export default App;
