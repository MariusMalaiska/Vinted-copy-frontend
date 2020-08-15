import React from "react";
import "./index.scss";
// import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { LogoutContext } from "../../../providers/logout.provider";
// import { DropdownContext } from "../../../providers/dropdown.provider";
// import logo from "./styles/images/logo.png";
// import logo from "../../styles/images/logo.png";

function HeaderFollowing() {
  //   const { toggleDropdown } = useContext(DropdownContext);
  //   const { logout } = useContext(LogoutContext);
  //   const classesopen = { close: "Close-dropdown", open: "Open-dropdown" }[
  //     dropdowntoggle
  //   ];

  let classes = "Header--following";

  return (
    <div className={`${classes}`}>
      <div className="Container">
        <ul className="Header--unordered-list">
          <li className="Header--list">
            {/* <catalog-dropdown title="Moterški" /> */}
            {/* :items="categories.women" */}
            <Button color="none">Moteriški</Button>
          </li>
          <li className="Header--list">
            {/* <catalog-dropdown title="Vyriški" /> */}
            {/* :items="categories.man" */}
            <Button color="none">Vyriški</Button>
          </li>
          <li className="Header--list">
            {/* <catalog-dropdown title="Apie mus" /> */}
            {/* :items="categories.about" */}
            <Button color="none">Apie mus</Button>
          </li>
          <li className="Header--list--mobile--input">
            <div className="Header--item--mobile--input">
              {/* <dropdown title="Services" /> */}
              <Dropdown />
              {/* :items="services" */}
              <form>
                {/* @submit.prevent="handleSearch" */}
                <input
                  className="Search--input"
                  type="text"
                  id="fname"
                  name="fname"
                  // v-model="searchInput"
                />
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderFollowing;
