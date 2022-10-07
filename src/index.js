import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://static.jojowiki.com/images/thumb/5/51/latest/20210407134012/JoJo%27s_Bizarre_Adventure_The_Animation_International_Poster.png/300px-JoJo%27s_Bizarre_Adventure_The_Animation_International_Poster.png"
    alt="JoJo's Bizzare Adventure Part 1: Phantom Blood"
  />
);

const Title = () => <h2>JoJo's Bizzare Adventure Part 1: Phantom Blood</h2>;

const Author = () => <h4>Araki</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
