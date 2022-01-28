import { createStore } from "redux";
import { rootReduser } from "./redusers";

export const store = createStore(rootReduser);
export type RootState = ReturnType<typeof store.getState>;