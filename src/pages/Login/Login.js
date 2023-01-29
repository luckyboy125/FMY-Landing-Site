import FmyLogo from "../../asset/sidebar/FmyLogo.svg";
import Effect from "../../asset/login/effect.svg";
import Analysis from "../../asset/login/login_analysis.svg";
import "./Login.css";
import { useState } from "react";

function Login({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = () => {
    if (!email) {
      return;
    }
    if (!pass) {
      return;
    }
    onSubmit();
  };

  return (
    <>
      <div className="loginRoot">
        <img
          src={FmyLogo}
          className="fmyLogo"
          alt="fmyLogo"
          onClick={() => window.location.reload()}
        />
        <img src={Effect} className="effect" alt="effect" />
        <img src={Analysis} className="analysis" alt="analysis" />
        <div className="loginCard">
          <div className="title">Sign in</div>
          <div className="inputRoot">
            <input
              placeholder="Enter your e-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputRoot">
            <input
              type="password"
              placeholder="Enter your password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="submitBtn" onClick={handleSubmit}>
            Get Started
          </div>
          <div className="termLetter">
            By entering your e-mail address you confirm that you agree with our{" "}
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
