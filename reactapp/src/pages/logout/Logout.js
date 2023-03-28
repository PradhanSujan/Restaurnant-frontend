import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../App";

const Logout = () => {
  //now we don't use consumer we use useContext
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const formLogout = async () => {
      const jwt = JSON.parse(localStorage.getItem("jwt"));
      if (!jwt) {
        console.log("please login");
        return;
      }

      console.log(jwt);

      try {
        const res = await fetch("/signout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        });

        const data = await res.json();
        if (data) {
          console.log(data);

          dispatch({ type: "USER", payload: false });
          localStorage.removeItem("jwt");
          localStorage.clear();
          console.log(data);
          toast.success(`${data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          console.log("failed to logout first login please");
        }
      } catch (error) {
        console.log(error);
      }
    };

    formLogout();
  }, []);

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default Logout;
