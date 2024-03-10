import React, { useState } from "react";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setText((pervNote) => {
      return {
        ...pervNote,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(text);
    setText({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={text.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={text.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
