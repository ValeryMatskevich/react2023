import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISubmitForm } from '../interface/interface';

const initialState: {
  data: ISubmitForm[];
} = {
  data: [],
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormInList: (state, action: PayloadAction<ISubmitForm>) => {
      state.data.unshift(action.payload);
    },
  },
});

export const { actions, reducer } = formDataSlice;
