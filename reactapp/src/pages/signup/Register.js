import React, { useState } from "react";
import FormInput from "./Form-input.component";

const deaultFormField = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formField, setFormField] = useState(deaultFormField);
  const { name, email, password, confirmPassword } = formField;

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const onHandleChange = (event) => {
    // console.log(event);
    const { name, value } = event.target;
  };

  const onHandleSubmit = async(event) => {
    event.preventDefault();
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();
      resetFormFields();
    } catch (err) {
      console.log(err);
    }
  };

  const resetFormFields = () => {
    setFormField(deaultFormField);
  };

  return (
    <>
      <div
        style={{
          height: "700px",
          width: "100%",
          paddingTop: "32px",
          background: "#ddd",
        }}
      >
        <div
          style={{
            width: "480PX",
            height: "500px",
            display: "flex",
            margin: "0 auto",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "0px 0 31px 0px rgb(0 0 0 / 10%",
            backgroundColor: "#fff",
            borderRadius: "20px",
          }}
        >
          <h1>Sign Up</h1>
          <div>
            <form onSubmit={onHandleSubmit}>
              <FormInput
                label="DisplayName"
                type="text"
                autoComplete="off"
                required
                name="name"
                value={name}
                onChange={handleInput}
              />
              <FormInput
                label="Email"
                type="email"
                autoComplete="off"
                required
                name="email"
                value={email}
                onChange={handleInput}
              />

              <FormInput
                label="Password"
                type="password"
                autoComplete="off"
                required
                name="password"
                value={password}
                onChange={handleInput}
              />

              <FormInput
                label="Confirm Password"
                type="password"
                autoComplete="off"
                required
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleInput}
              />
              <button className="btn-register" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
