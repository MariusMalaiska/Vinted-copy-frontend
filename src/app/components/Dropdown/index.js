import React from "react";
import "./index.scss";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { LogoutContext } from "../../../providers/logout.provider";
// import { DropdownContext } from "../../../providers/dropdown.provider";
import arrow from "../../styles/images/arrow.png";

function Dropdown() {
  // const { toggleDropdown } = useContext(DropdownContext);
  // const { logout } = useContext(LogoutContext);
  //   const classesopen = { close: "Close-dropdown", open: "Open-dropdown" }[
  //     dropdowntoggle
  //   ];

  let classes = "Search--btn";

  return (
    <button className={`${classes}`}>
      Drabužiai
      <img className="Arrow" src={arrow} alt="arrow" />
    </button>
  );
}

export default Dropdown;
