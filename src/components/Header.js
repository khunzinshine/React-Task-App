import React from "react";
import Button from "./Button";
import "../index.css";

const Header = ({ showForm, changeTextAndColor }) => {
  return (
    <header className="header">
      <h2 className="app-header">Task App</h2>
      <Button
        onClick={showForm}
        color={changeTextAndColor ? "#474747" : "#30D5C8"}
        text={changeTextAndColor ? "Close" : "Add"}
      />
    </header>
  );
};
export default Header;
