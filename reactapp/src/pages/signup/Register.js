import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "./FormInput";

const deaultFormField = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formField, setFormField] = useState(deaultFormField);
  const { name, email, password, confirmPassword } = formField;
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!name || !email || !password || !confirmPassword) {
        toast.warn("Please Enter The Value ", {
          position: "top-right",
        });
      } else {
        const res = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
          }),
        });

        if (!res.ok) {
          if (res.status === 400 || res.status === 422) {
            const data = await res.json();
            toast.error(`${data.error}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            toast.error("unexpeted error occurs", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        }

        const data = await res.json();
        if (data.status === 200 || data) {
          setTimeout(
            toast.success("Register Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }),
            1000
          );
          navigate("/login");
        } else {
          console.log(`error`);
        }
      }

      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const resetFormFields = () => {
    setFormField(deaultFormField);
  };

  return (
    <>
      <div
        className="register-container"
        style={{
          height: "700px",
          width: "100%",
          paddingTop: "32px",
          background: "#fff",
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
            borderLeft: "1px solid #ffd1d1",
            borderBottom: "1px solid #ffd1d1",
          }}
        >
          <h1>Sign Up</h1>
          <div className="form-section">
            <form onSubmit={onHandleSubmit}>
              <FormInput
                label="Name"
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
              <button className="btn-register" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
