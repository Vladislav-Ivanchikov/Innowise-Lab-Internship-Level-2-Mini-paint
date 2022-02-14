import React, {useRef} from "react";
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions";
import {IState} from "../../types/state";
import {LinkWrap} from "../navbar/Navbar.style";
import {FindWrap, SidebarWrap, Text} from "./Sidebar.style";
import {Btn} from "../toolbar/Toolbar.style";
import {Input} from "../../pages/auth/AuthForm.style";
import {IProps} from "../gallery/Gallery";

const Sidebar: React.FC<IProps> = ({fetch}) => {
    const state = useSelector((state: IState) => state);
    const {findReq, filtredUsers} = useActions();
    const inputRef = useRef<HTMLInputElement>(null);
    const users = state.data.users;
    const find = state.data.findReq;

    const searchUser = () => {
        filtredUsers(users, find);
        inputRef!.current!.value = "";
        console.log(users)
    };

    return (
        <SidebarWrap>
            <LinkWrap to="/canvas">Create new picture</LinkWrap>
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