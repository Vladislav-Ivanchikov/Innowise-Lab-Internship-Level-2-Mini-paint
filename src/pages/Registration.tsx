import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Context } from "../index";

const Registration: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const { auth } = useContext(Context);

  const regNewUser = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      if (email && password) {
        await register(email, password);
        alert(`${auth.currentUser.email} register success`);
      } else {
        alert("Please, fill all lines");
      }
    } catch {
      alert("Something went wrong ! Try, latter");
    }
  };

  return (
    <form action="">
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={regNewUser} type="submit">
        Registration
      </button>
    </form>
  );
};

export default Registration;