import React from "react";
import { Note } from "../model/note.model";
import { json } from "stream/consumers";

type Props = {
  note: Note;
  handleDelete: (id: string) => void;
};

const Notes = ({ note, handleDelete }: Props): JSX.Element => {
  const { id, title, text, color, date } = note;

  return (
    <>
      <div
        className="group relative block flex-wrap rounded-lg"
        style={{ background: color }}
      >
        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            {date}
          </p>
          <p className="text-xl font-bold text-black sm:text-2xl">{title} </p>
          <div className="mt-4 sm:mt-4 lg:mt-6">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-black mb-3">{text}</p>
              <button className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                <span
                  className="block rounded-full bg-white px-8 py-1 text-sm font-medium hover:bg-transparent"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
