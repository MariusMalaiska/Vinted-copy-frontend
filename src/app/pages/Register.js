import React, { useState, useContext } from "react";
// import Button from "../components/Button";
import "../index.css";
// import { withRouter } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { TokenContext } from "../../providers/token.provider";
import { RegisterContext } from "../../providers/register.provider";

const Register = () => {
  const { register } = useContext(RegisterContext);
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  // const [rpassword, setRPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [phonenumber, setPhonenumber] = useState("");
  const [errors, setErrors] = useState("");

  const validate = e => {
    let isValid = true;
    if (!email.includes("@")) {
      setErrors("Invalid e-mail");
      isValid = false;
    }
    // if (password !== rpassword) {
    //   setErrors("Password does not match");
    //   isValid = false;
    // }
    return isValid;
  };

  const reg = e => {
    e.preventDefault();

    if (validate()) {
      register(nickName, password, email);
    }
  };

  return (
    <div class="Register">
      <div class="register__container">
        <h2>Registruotis</h2>
        {!!errors && <div className="Input-error">{errors}</div>}
        <form class="registration__form" onSubmit={reg}>
          {/* @submit.prevent="{register;}" */}
          <div class="container">
            {/* <div v-if="error">alert{{ error }}</div> */}
            <input
              onChange={e => setNickName(e.target.value)}
              class="input"
              type="text"
              placeholder="Vartotojo vardas"
              name="nickname"
              required
            />
            <input
              onChange={e => setEmail(e.target.value)}
              class="input"
              type="email"
              placeholder="El. Pašto adresas"
              name="email"
              required
            />
            <input
              onChange={e => setPassword(e.target.value)}
              class="input"
              type="password"
              placeholder="Slaptažodis"
              name="password"
              required
            />
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Sutinku su taisyklėmis
            </label>
            <p class="validation">
              Užsiregistruodamas patvirtinu, kad perskaičiau ir sutinku su
              Vinted taisyklėmis ir privatumo politika. Patvirtinu, jog man ne
              mažiau kaip 18 metų.
            </p>
          </div>
          <button class="button signin">
            {/* @click.prevent="handleRegistration()" */}
            Registruotis
          </button>
        </form>
      </div>
    </div>
    // <div className="Register">
    //   <div className="Register-box">
    //     {!!errors && <div className="Input-error">{errors}</div>}

    //     <form onSubmit={reg}>
    //       {/* nickName, password, email, phonenumber */}
    //       {/* ------------------email------------------------- */}
    //       <label className="Label" htmlFor="email">
    //         E-mail
    //       </label>
    //       <input
    //         className="Input  email"
    //         type="email"
    //         onChange={e => setEmail(e.target.value)}
    //         autoComplete="email"
    //         id="email"
    //         name="email"
    //       />
    //       {/* ------------------nickName------------------------- */}
    //       <label className="Label" htmlFor="nickName">
    //         NickName
    //       </label>
    //       <input
    //         className="Input  nickName"
    //         type="text"
    //         onChange={e => setNickName(e.target.value)}
    //         autoComplete="nickName"
    //         id="nickName"
    //         name="nickName"
    //       />
    //       {/* ---------------------password---------------------- */}
    //       <label className="Label" htmlFor="password">
    //         Password
    //       </label>

    //       <input
    //         className="Input Password"
    //         autoComplete="current-password"
    //         type="password"
    //         onChange={e => setPassword(e.target.value)}
    //         id="pasword"
    //         name="password"
    //       />
    //       {/* ---------------------r-password---------------------- */}
    //       <label className="Label" htmlFor="rpassword">
    //         Repeat Password
    //       </label>

    //       <input
    //         className="Input rpassword"
    //         autoComplete="current-password"
    //         type="password"
    //         onChange={e => setRPassword(e.target.value)}
    //         id="rpassword"
    //         name="rpassword"
    //       />
    //       {/* ------------------------phonenumber------------------------ */}

    //       <label className="Label" htmlFor="phonenumber">
    //         Phone Number
    //       </label>
    //       <input
    //         className="Input phonenumber"
    //         autoComplete="tel"
    //         type="tel"
    //         onChange={e => setPhonenumber(e.target.value)}
    //         id="phonenumber"
    //         name="phonenumber"
    //       />
    //       {/* ------------------------Register------------------------ */}

    //       <Button size="large" type="submit">
    //         Register
    //       </Button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Register;
