import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL604_SR604,400_.jpg",
  title: "Little Blue Truck's Valentine",
  autor: "Alice Sohertle",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL604_SR604,400_.jpg",
  title: "The 40 Laws of Power",
  autor: "Peter Greene",
};

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

ReactDOM.render(<Booklist />, document.getElementById("root"));
