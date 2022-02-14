import React, {useRef} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {IState} from "../../types/state";
import {LinkWrap} from "../navbar/Navbar.style";
import {FindWrap, SidebarWrap, Text} from "./Sidebar.style";
import {Btn} from "../toolbar/Toolbar.style";
import {Input} from "../../pages/auth/AuthForm.style";

const Sidebar: React.FC = () => {
    const {users, find} = useTypedSelector((state: IState) => state.data);
    const {findReq, filtredUsers, setCanvasPage} = useActions();
    const inputRef = useRef<HTMLInputElement>(null);

    const searchUser = () => {
        filtredUsers(users, find);
        inputRef!.current!.value = "";
    };

    return (
        <SidebarWrap>
            <LinkWrap to="/canvas" onClick={() => setCanvasPage(true)}>
                Create new picture
            </LinkWrap>
            <FindWrap>
                <Text>Find user picture</Text>
                <Input
                    placeholder="example@mail.com"
                    ref={inputRef}
                    type="text"
                    onChange={(e) => findReq(e.target.value)}
                />
                <Btn onClick={searchUser}>Find</Btn>
            </FindWrap>
        </SidebarWrap>
    );
};

export default Sidebar;