import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Booklist() {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}
let Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Autor />
    </article>
  );
};

const Image = () => (
  <img
    id="image"
    src="https://images-na.ssl-images-amazon.com/images/I/817-Vrzp+tL._AC_UL604_SR604,400_.jpg"
    alt=""
  />
);

const Title = () => <h4>Little Blue Truck's Valentine</h4>;
const Autor = () => <h5>Alice Sohertle</h5>;

ReactDOM.render(<Booklist />, document.getElementById("root"));
