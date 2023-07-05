"use client";

import "../styles/search.scss";
import { SyntheticEvent, useCallback, useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export default function SearchBar() {
  const { todo, SetTodo } = useContext(TodoContext);
  const [input, setInput] = useState<string>("");

  const handleSubmit = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      if (input) {
        SetTodo([
          ...todo,
          {
            completed: false,
            content: input,
          },
        ]);
      }
      setInput("");
    },
    [input, todo, SetTodo]
  );

  return (
    <div className="search">
      <input
        type="text"
        name="userinput"
        value={input}
        placeholder="Add details"
        className="input"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit(e);
        }}
        required
      />
      <button
        className="submit"
        onClick={handleSubmit}
        disabled={input.length === 0}
      >
        Add
      </button>
    </div>
  );
}