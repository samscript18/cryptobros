"use client";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa6";

const SignUp = () => {
  const { push } = useRouter();
  const handleSignupClick = () => {
    push("/");
  };

  return (
    <div className="form-container sign-up">
      <form>
        <h1>Create Account</h1>
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
        <span>Or Sign-Up with Your Email</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button>Sign-up</button>
      </form>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>Hello, Crypto Brothers!</h1>
            <p>To Create an Account</p>
            <button
              className="hidden"
              id="register"
              onClick={handleSignupClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
