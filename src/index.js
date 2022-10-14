import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const books = [
  {
    title: "JoJo's Bizzare Adventure Part 1: Phantom Blood",
    author: "Hirohiko Araki",
    img: "https://static.jojowiki.com/images/thumb/5/51/latest/20210407134012/JoJo%27s_Bizarre_Adventure_The_Animation_International_Poster.png/300px-JoJo%27s_Bizarre_Adventure_The_Animation_International_Poster.png",
  },
  {
    title: "JoJo's Bizzare Adventure Part 2: Battle Tendency",
    author: "Hirohiko Araki",
    img: "https://pictures.abebooks.com/isbn/9782756069043-us.jpg",
  },
  {
    title: "JoJo's Bizzare Adventure Part 3: Stardust Crusaders",
    author: "Hirohiko Araki",
    img: "https://jjba.store/wp-content/uploads/2021/04/product-image-1326646852_167fc69e-7b46-4823-859b-f12c6e5add29.jpg",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt={title} />

      <h1>{title}</h1>

      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
