import ComponentB from "./ComponentB.jsx";
import React, { useState, createContext } from "react";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Laurde");

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Welcome ${user}`}</h2>

      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
