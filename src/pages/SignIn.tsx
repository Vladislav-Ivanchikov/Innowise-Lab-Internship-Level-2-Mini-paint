import React, { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Context } from "../index";
import {FormWrap, Input} from "./AuthForm.style";
import {Btn} from "../components/toolbar/Toolbar.style";

const SignIn: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useAuth();
  const { auth } = useContext(Context);

  const signInUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      if (email && password) {
        await logIn(email, password);
        alert(`${auth.currentUser.email} sign in`);
      } else {
        alert("Please, fill all lines");
      }
    } catch {
      alert("Something went wrong ! Try, latter");
    }
  };

  return (
    <FormWrap>
        <h2>Sign In</h2>
      <form action="">
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Btn onClick={signInUser} type="submit">
          Sign in
        </Btn>
      </form>
    </FormWrap>
  );
};

export default SignIn;
