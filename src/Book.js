import React from "react";

const Book = ({ id, img, title, author }) => {
  const complexExample = (author) => {
    alert(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => complexExample(author)}>
        Example
      </button>
    </article>
  );
};

export default Book
