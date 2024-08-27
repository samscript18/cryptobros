"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa6";

const SignIn = () => {
  const { push } = useRouter();
  const handleLoginClick = () => {
    push("/login");
  };
  const handleForgetPassword = () => {
    push("/forgot-password");
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Login</h1>
        <div className="social-icons">
          <a href="#" className="icon">
            <FaGooglePlusG size={18} />
          </a>
          <a href="#" className="icon">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="icon">
            <FaLinkedinIn size={18} />
          </a>
        </div>
        <span>or Login with Your Email</span>
        <input type="email" placeholder="Email" />
        <div className="password">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            placeholder="Password"
            required
            maxLength={22}
          />
          <i
            onClick={togglePasswordVisibility}
            className={`reveal-password fa ${
              isPasswordVisible ? "fa-eye-slash" : "fa-eye"
            }`}
            style={{ cursor: "pointer" }}
          />
        </div>

        <a className="Forget" onClick={handleForgetPassword}>
          Forget Your Password?
        </a>
        <button>Login</button>
      </form>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>Hello, Crypto Brothers!</h1>
            <p>To Login</p>
            <button className="hidden" id="register" onClick={handleLoginClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
