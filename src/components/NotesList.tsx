import React from "react";
import { Note } from "../model/note.model";
import Notes from "./Notes";

type Props = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const NotesList = ({ notes, setNotes }: Props): JSX.Element => {
  const handleDelete = (id: string) => {
    let confirmed = window.confirm("Are You sure to Delete ?");
    if (confirmed) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <>
      <div className="row text-center">
        <div className="col grid grid-cols-1 gap-3 m-4 ">
          {notes.map((note) => (
            <Notes note={note} key={note.id} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NotesList;
