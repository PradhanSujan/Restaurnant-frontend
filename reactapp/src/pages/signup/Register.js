import React from "react";
import FormInput from "./Form-input.component";

const Register = () => {
  return (
    <>
    <div style={{height:"700px", width:"100%",paddingTop:"32px"}}>
      <div
        style={{
          width: "480PX",
          // minHeight: "400px",
          display: "flex",
          justifyContent: "space-evenly",
          margin: "0 auto",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "0px 0 31px 0px rgb(0 0 0 / 10%",
          backgroundColor: " rgba(255, 255, 255, 0.4)",
          borderRadius: "20px",
        }}
      >
        <h1>Sign Up</h1>
        <div>
          <form>
            <FormInput
              label="DisplayName"
              type="text"
              autoComplete="off"
              required
              name="displayName"
              value=""
            />
            <FormInput
              label="Email"
              type="email"
              autoComplete="off"
              required
              name="email"
              value=""
            />

            <FormInput
              label="Password"
              type="password"
              autoComplete="off"
              required
              name="password"
              value=""
            />

            <FormInput
              label="Confirm Password"
              type="password"
              autoComplete="off"
              required
              name="confirmPassword"
              value=""
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Register;
