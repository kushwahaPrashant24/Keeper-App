import React, { useState } from "react";
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './Textarea';



function App() {

  const [store, setStore] = useState([]);

  function addNote(newNotes) {
    setStore((prevNotes) => {
      return [...prevNotes, newNotes];
    });
  }
  function deletion(id) {
    setStore((prevNotes) => {
      return prevNotes.filter((store, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {store.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onTick={deletion}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
