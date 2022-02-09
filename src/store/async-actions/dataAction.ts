import { Dispatch } from "redux";
import { DataActionTypes, DataTypes } from "../../types/data";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../index";

export const fetchUsersPicture = () => {
  return async (dispatch: Dispatch<DataActionTypes>) => {
    try {
      const usersCollection = await getDocs(collection(db, "users"));
      usersCollection.forEach((doc) =>
        dispatch({ type: DataTypes.FETCH_USERS, payload: doc.data() })
      );
    } catch {}
  };
};