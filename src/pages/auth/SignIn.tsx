import React, { useContext, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Context } from "../../index";
import Swal from "sweetalert2";
import { FormWrap, Input } from "./AuthForm.style";
import { Btn } from "../../components/toolbar/Toolbar.style";

const SignIn: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { logIn } = useAuth();
  const { auth } = useContext(Context);

  const signInUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      if (email && password) {
        await logIn(email, password);
        await Swal.fire({
          position: "center",
          icon: "success",
          title: `You are sign in Mini paint! Welcome back, ${auth.currentUser.email} !`,
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        await Swal.fire({
          position: "top",
          icon: "warning",
          title: `Please fill all lines`,
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } catch {
      await Swal.fire({
        position: "top",
        icon: "error",
        title: `Something went wrong, please try letter`,
        showConfirmButton: false,
        timer: 3000,
      });
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
