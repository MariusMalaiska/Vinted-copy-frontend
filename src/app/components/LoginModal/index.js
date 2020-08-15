import React, { useState, useContext } from "react";
import "./index.scss";
import { ModalContext } from "../../../providers/modal.provider";
// import { MobileMenuContext } from "../../../providers/mobile.menu.provider";
import { LoginContext } from "../../../providers/login.provider";
import Button from "../../components/Button";

function LoginModal({ dropdowntoggle }) {
  const { toggleModal } = useContext(ModalContext);
  const { login } = useContext(LoginContext);
  // const { closeMobileMenu } = useContext(MobileMenuContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    login(email, password);
  };

  return (
    <transition name="modal">
      <div className="Modal--mask">
        <div className="Modal--wrapper">
          <div className="Modal--Container">
            <div className="Modal--header">
              <div className="Modal--default">
                <button
                  className="Modal--default--button"
                  onClick={toggleModal}
                >
                  X
                </button>
              </div>
              <h2 className="Modal--heading"> Prisijunk prie Vinted</h2>
              <div slot="body">
                <p className="Modal--text">
                  Parduok nebereikalingus drabužius už savo kainą. Pradėk
                  šiandien!
                </p>

                <div className="Container">
                  <input
                    class="Input"
                    type="email"
                    placeholder="E-Paštas"
                    onChange={e => setEmail(e.target.value)}
                    name="uname"
                    required
                  />
                  <input
                    className="Input"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Slaptažodis"
                    name="psw"
                    required
                  />
                </div>
              </div>
              <div slot="footer">
                <div className="Login--buttons">
                  {/* <Link className="Modal--button" to={`/registration`}>
                    Registruotis
                  </Link> */}
                  <Button className="Modal--button" to={`/register`}>
                    Registruotis
                  </Button>
                  <div className="Modal--line"></div>
                  <button className="Modal--button" onClick={signIn}>
                    Prisijungti
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  );
}

export default LoginModal;
