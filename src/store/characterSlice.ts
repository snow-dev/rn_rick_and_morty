import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type CharacterType = {
  name: string;
};

interface CharactersState {
  list: CharacterType[];
}

const initialState: CharactersState = {
  list: [],
};
export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<CharacterType>) => {
      state.list.push(action.payload);
    },
  },
});

export const {setName} = characterSlice.actions;
export default characterSlice.reducer;
