import React, { useContext } from "react";
import "./index.scss";
import homeImage from "../../styles/images/home-hero.jpg";
import LoginModal from "../../components/LoginModal";
import { ModalContext } from "../../../providers/modal.provider";
import Button from "../Button";
import { TokenContext } from "../../../providers/token.provider";

function Hero() {
  const { modal, toggleModal } = useContext(ModalContext);
  const { token } = useContext(TokenContext);
  let classes = "Hero";

  return (
    <div className={`${classes}`}>
      <div className="Hero--content">
        <div className="Hero--content--header">
          Atėjo metas atlaisvinti vietos spintoje?
        </div>
        {/* <router-link class="btn btn-primary btn-lg" to="/about">About</router-link> */}
        <Button size="min" color="green" to="/about">
          Parduok
        </Button>
      </div>
      <div className="Hero--bg">
        <img src={homeImage} alt="" />
        <div className="Hero--bg--overlay"></div>
      </div>
      <div className="Hero--mobile--content">
        <div className="Hero--mobile--content--header">
          Atėjo metas atlaisvinti vietos spintoje?
        </div>
        {/* <router-link class="btn btn-primary btn-lg" to="/about">About</router-link> */}
        {token === null ? (
          <Button size="min" color="green" onClick={toggleModal}>
            Parduok
          </Button>
        ) : (
          <Button size="min" color="green" to={`/createadvert`}>
            Parduok
          </Button>
        )}
        {modal === true && <LoginModal />}
      </div>
    </div>
  );
}

export default Hero;
