import React, { useState } from "react";
import { Note } from "./model/note.model";
import Circle from "./components/framer-motion/Circle";
// import NotesList from "./components/NotesList";
// import CreateNotes from "./components/CreateNotes";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "I am Title",
      text: "This is sample text for description",
      color: "#d2d2d2",
      date: new Date().toString(),
    },
  ]);

  return (
    <div>

      <div>
        <p className="pt-2 text-lg font-bold text-center">
          Notes application
        </p>
      </div>
      <Circle />
      {/* <NotesList notes={notes} setNotes={setNotes} />
      <CreateNotes notes={notes} setNotes={setNotes} /> */}
    </div>
  );
};

export default App;
