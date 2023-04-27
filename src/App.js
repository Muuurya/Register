import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Register from "../src/components/Register";
import "./App.css";
export default function () {
  return (
    <>
      <Routes>
        <Route path="" element={<Register />} />
      </Routes>
    </>
  );
}
