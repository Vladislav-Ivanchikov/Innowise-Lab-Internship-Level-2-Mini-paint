import React, {useRef} from "react";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {IState} from "../../types/state";
import {LinkWrap} from "../navbar/Navbar.style";
import {FindWrap, SidebarWrap, Text} from "./Sidebar.style";
import {Btn} from "../toolbar/Toolbar.style";
import {Input} from "../../pages/AuthForm.style";

const Sidebar: React.FC = () => {
    const state = useSelector((state: IState) => state);
    const {findReq, filtredUsers} = useActions();
    const inputRef = useRef<HTMLInputElement>(null);
    const users = state.data.users;
    const find = state.data.findReq;

    const searchUser = () => {
        filtredUsers(users, find);
        inputRef!.current!.value = "";
    };

    return (
        <SidebarWrap>
            <LinkWrap to="/canvas">Create new picture</LinkWrap>
            <FindWrap>
                <Text>Find user picture</Text>
                <Input
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