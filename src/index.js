import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL604_SR604,400_.jpg",
    title: "Little Blue Truck's Valentine",
    autor: "Alice Sohertle",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL604_SR604,400_.jpg",
    title: "The 40 Laws of Power",
    autor: "Peter Greene",
  },
];
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
//Spring operator ... llama a las popiedades por separado de un objeto

const Book = ({ img, title, autor }) => {
  //  const { img, title, autor } = props.book;

  return (
    <article className="book">
      <img id="image" src={img} alt="" />
      <h4>{title}</h4>
      <h5>{autor}</h5>
    </article>
  );
};
// Siempre que haya una lista hay que incluir el key prop
/*
function Booklist() {
  return (
    <div className="booklist">
      <Book img={firstBook.img} title={firstBook.title} autor={firstBook.autor}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste illum
          praesentium harum voluptatibus similique fugit debitis magni sequi cum
          totam.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        autor={secondBook.autor}
      />
    </div>
  );
}
let Book = ({ img, title, autor, children }) => {
  //let Book = (props) => {
  //const {img,title,autor} =props;
  return (
    <article className="book">
      <img id="image" src={img} alt="" />
      <h4>{title}</h4>
      <h5>{autor}</h5>
      {children}
    </article>
  );
};
*/
ReactDOM.render(<Booklist />, document.getElementById("root"));
