import React, { useRef, useState } from "react";
import { Note } from "../model/note.model";
import Alert from "./Alert";

type Props = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
};

const CreateNotes = ({ setNotes, notes }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const colorRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !text) {
      setError("All fields are Mandatory");
    } else {
      let newNote: Note = {
        id: new Date().toString(),
        title,
        text,
        color: (colorRef.current as HTMLInputElement).value,
        date: new Date().toString(),
      };
      setNotes([...notes, newNote]);
      setText(""), setTitle("");
    }
  };
  const onDismiss = () => {
    setError("");
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl ">
        <div className="text-center">
          <h2 className="text-xl text-gray-800 font-bold sm:text-xl dark:text-white">
            Post a comment
          </h2>
        </div>
        {error && <Alert error={error} onDismiss={onDismiss} />}

        <div className="mt-5 p-2 relative z-10 bg-slate-400 border rounded-xl sm:mt-5 md:p-5">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-4 sm:mb-8">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Description"
                  rows={5}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="color" className="block font-semibold">
                Notes Color
              </label>
              <input type="color" ref={colorRef} defaultValue={"#dfdfdf"} />
            </div>

            <div className="mt-6 grid">
              <button
                type="submit"
                className="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              >
                <span className="block rounded-full bg-white px-8 py-1 text-sm font-medium hover:bg-transparent">
                  Create Note
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNotes;
