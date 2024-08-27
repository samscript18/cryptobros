"use client";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const { push } = useRouter();
  const VerificationClick = () => {
    push("/verification");
  };
  return (
    <div className="form-container forget-password">
      <form>
        <h1>Forget Password</h1>
        <span>Email Address for Verification Code</span>
        <input type="email" placeholder="Email Address" />
        <button onClick={VerificationClick}>Verify</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
