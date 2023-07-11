import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";

export const updateUsers = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = axios.post("/v1/update", user);
    dispatch(updateSuccess((await res).data));
  } catch (error) {
    dispatch(updateError());
  }
};
