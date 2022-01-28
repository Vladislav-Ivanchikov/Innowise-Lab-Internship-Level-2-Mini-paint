import React, {useContext, useState} from "react";
import {useAuth} from "../context/AuthContext";
import {Context} from "../index";

const SignIn: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {logIn} = useAuth();
    const {auth} = useContext(Context);

    const signInUser = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        try {
            if (email && password) {
                await logIn(email, password);
                alert(`${auth.currentUser.email} sign in`);
            } else {
                alert("Please, fill all lines");
            }
        } catch (error) {
            alert("Please, fill all lines");
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
                <button onClick={signInUser} type="submit">
                    Sign in
                </button>
            </form>
    );
};

export default SignIn;