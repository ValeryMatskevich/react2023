/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormsList, IFormData } from '../interface/interface';
import { InitialFormData } from '../constants/constants';

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    InitialFormData,
    listOfForms: [] as FormsList,
  },
  reducers: {
    setForm: (state, action: PayloadAction<IFormData>) => {
      state.InitialFormData = { ...action.payload };
    },
    setFormInList: (state, action: PayloadAction<IFormData>) => {
      state.listOfForms.unshift(action.payload);
    },
  },
});

export const { actions, reducer } = formDataSlice;
