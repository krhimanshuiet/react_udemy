/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import { pizzaData } from "./pizzaData";
import "./index.css";
import { Fragment } from "react";
export const Header = () => {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Fizza Co.</h1>
    </header>
  );
};

export const Application = () => {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </Fragment>
  );
};

export const Menu = () => {
  if (!pizzaData.length) {
    return <div>We are currently working on menu, Please comaback later.</div>;
  }
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {!!pizzaData.length && (
        <Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from.All from
            our stone oven,all organic,all delicious coming fresh from farm.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} {...pizza} />
            ))}
          </ul>
        </Fragment>
      )}
    </main>
  );
};

export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 to {closeHour}:00.
        </p>
      )}
    </footer>
  );
};

const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>
        {new Date().toLocaleTimeString()} We are currently open in 🇮🇳 until{" "}
        {closeHour}:00 ⛳,Come visit us or order online
      </p>
      <button className="btn">order</button>
    </div>
  );
};

export const Pizza = ({ name, ingredients, photoName, price, soldOut }) => {
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={name} />
      <div>
        <p>{ingredients}</p>
        <h3>{name}</h3>
        <span>Rs.{price * 10}/-</span>
        <span>{soldOut ? "OUT OF STOCK 🧡" : "IN STOCK 💚"}</span>
      </div>
    </li>
  );
};
