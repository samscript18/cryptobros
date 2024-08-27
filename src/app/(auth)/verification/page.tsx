const Verification = () => {
  return (
    <div className="form-container forget-password">
      <form>
        <h1>VERIFY</h1>
        <input type="email" placeholder="Email Address" />
        <input
          className="verify"
          type="number"
          placeholder="Verification code"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Verification;
