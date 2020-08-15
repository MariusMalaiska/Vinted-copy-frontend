import React, { useContext } from "react";
import "./index.scss";
import Dropdown from "../../components/Dropdown";

import Button from "../../components/Button";
import LoginModal from "../../components/LoginModal";
import { Link } from "react-router-dom";
import { ModalContext } from "../../../providers/modal.provider";
import { LogoutContext } from "../../../providers/logout.provider";
import { MobileMenuContext } from "../../../providers/mobile.menu.provider.js";
import { TokenContext } from "../../../providers/token.provider";
import { UserNameContext } from "../../../providers/userName.provider";

import logo from "../../styles/images/logo.png";
import openMenu from "../../styles/images/open-menu.png";
import closeMenu from "../../styles/images/close.png";
import bell from "../../styles/images/bell.png";
import heart from "../../styles/images/heart.png";
import email from "../../styles/images/email.png";
import avatar from "../../styles/images/avatar.png";

function HeaderMain() {
  const { token } = useContext(TokenContext);
  const { logout } = useContext(LogoutContext);
  const { userName } = useContext(UserNameContext);
  const { modal, toggleModal } = useContext(ModalContext);
  const { mobileMenu, closeModal, toggleMobileMenu } = useContext(
    MobileMenuContext
  );

  let classes = "Header--main";

  return (
    <div className={`${classes}`}>
      {/* <nav class="Header__main"> */}
      <div className="Container">
        <ul className="Header--unordered-list">
          <li>
            <Link className="Add-link" to={`/`} onClick={closeModal}>
              <img className="Logo" src={logo} alt="logo" />
            </Link>
          </li>
          <li className="Header--list--input">
            <div className="Header--item--input">
              <Dropdown />
              <form>
                <input
                  className="Search--input"
                  type="text"
                  id="fname"
                  name="fname"
                />
              </form>
            </div>
          </li>
          <li>
            {/* <Button
              className="Header--burger"
              color="none"
              onClick={toggleMobileMenu}
              to="/mobilemenu"
            > */}
            {mobileMenu === true ? (
              <Button
                className="Header--burger"
                color="none"
                onClick={toggleMobileMenu}
                to="/"
              >
                <img
                  className="Toggle--burger--menu"
                  src={closeMenu}
                  alt="closeMenu"
                />
              </Button>
            ) : (
              <Button
                className="Header--burger"
                color="none"
                onClick={toggleMobileMenu}
                to="/mobilemenu"
              >
                <img
                  className="Toggle--burger--menu"
                  src={openMenu}
                  alt="openMenu"
                />
              </Button>
            )}
            {/* </Button> */}
            {/* {MobileMenu === true && <BurgerDropdown />} */}
          </li>
          <li className="Header--list">
            {token === null ? (
              <div className="Header--item">
                <Button color="transparent" onClick={toggleModal}>
                  Registruotis | Prisijungti
                </Button>
                {modal === true && <LoginModal />}
                <Button color="green">Parduok dabar</Button>
              </div>
            ) : (
              <div className="Header--item">
                <img alt="" className="Header--icon" src={email}></img>
                <img alt="" className="Header--icon" src={bell}></img>
                <img alt="" className="Header--icon" src={heart}></img>
                <img alt="" className="Header--user--img" src={avatar}></img>
                <Button onClick={logout}>
                  {userName || localStorage.getItem("appName-user")}
                </Button>
                <Button color="green" to={`/createadvert`}>
                  įkelti deabužį
                </Button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMain;
