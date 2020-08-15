import React, { useContext } from "react";
import Button from "../components/Button";
import LoginModal from "../components/LoginModal";

import { ModalContext } from "../../providers/modal.provider";
import { TokenContext } from "../../providers/token.provider";
import { LogoutContext } from "../../providers/logout.provider.js";

import dress from "../styles/images/Categories svg/dress.svg";
import shirt from "../styles/images/Categories svg/shirt.svg";

function MobileMenu() {
  const { modal, toggleModal } = useContext(ModalContext);
  const { token } = useContext(TokenContext);
  const { logout } = useContext(LogoutContext);

  let classes = "Mobile--Menu";

  return (
    <div className={`${classes}`}>
      <div className="Container">
        <Button
          to={token ? "/createadvert" : "/register"}
          //make login here?
          className="Mobile--btn"
          color="green"
        >
          Parduok dabar
        </Button>

        {token ? (
          <Button className="Mobile--btn" color="transparent" onClick={logout}>
            Atsijungti
          </Button>
        ) : (
          <Button
            className="Mobile--btn"
            color="transparent"
            onClick={toggleModal}
          >
            Registruotis | Prisijungti
          </Button>
        )}
        {modal === true && <LoginModal />}
        <Button className="Mobile--btn" color="none">
          Tavo Vinted gidas
        </Button>
        <div className="Line"> </div>
        <div className="More">
          <h4>Kategorijos</h4>
          <Button className="Mobile--more--btn" color="none">
            <img alt="" className="Mobile--more--icon" src={shirt}></img>
            Vyriški
          </Button>
          <Button className="Mobile--more--btn" color="none">
            <img alt="" className="Mobile--more--icon" src={dress}></img>
            Moteriški
          </Button>
          <h4>Sužinok daugiau</h4>
          <Button className="Mobile--more--btn" color="none">
            Kaip veikia Vinted?
          </Button>
          <Button className="Mobile--more--btn" color="none">
            Programele
          </Button>
          <Button className="Mobile--more--btn" color="none">
            Pagalba
          </Button>
          <Button className="Mobile--more--btn" color="none">
            Aktualu
          </Button>
          <h4>Apie įmonę</h4>
          <Button className="Mobile--more--btn" color="none">
            Apie vinted
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
