import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Context } from "../index";
import {Btn} from "../components/toolbar/Toolbar.style";
import {FormWrap, Input} from "./AuthForm.style";

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
      <FormWrap>
        <h2>Registration</h2>
        <form action="">
          <div>
            <Input
                type="email"
                placeholder="Email"
                value={email}
                name='email'
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Input
                type="password"
                placeholder="Password"
                value={password}
                name='password'
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Btn onClick={regNewUser} type="submit">
            Registration
          </Btn>
        </form>
      </FormWrap>
  );
};

export default Registration;