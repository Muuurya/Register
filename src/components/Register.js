import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import http from "../axios.js";
import { ToastContainer, toast } from "react-toastify";
import Toast from "./Toast";
export default function () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const register = (e) => {
    e.preventDefault();
    http
      .post("/register/", {
        username: username,
        password: password,
        password2: password2,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          Toast({ type: "success", text: "Success", theme: "light" });
        }
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 400) {
          Toast({ type: "error", text: "Error", theme: "dark" });
        }
      });
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className="row mt-3">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Register</h1>
            </div>
            <div className="card-body">
              <form>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control my-2"
                  type="text"
                  placeholder="Username..."
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control my-2"
                  type="password"
                  placeholder="Password..."
                />
                <input
                  onChange={(e) => setPassword2(e.target.value)}
                  className="form-control my-2"
                  type="password"
                  placeholder="Confirm password..."
                />
                <button
                  className="btn btn-danger form-control"
                  onClick={register}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
