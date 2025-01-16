import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface UserState {
  user: any;
  isVegMode: boolean;
}

const initialState: UserState = {
  user: null,
  isVegMode: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setVegMode: (state, action) => {
      state.isVegMode = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setVegMode, setUser} = userSlice.actions;
export const selectUser = (state: RootState) => state.user?.user;

export default userSlice.reducer;
