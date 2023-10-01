import { createSlice } from '@reduxjs/toolkit';
import { GoalsResponse } from './goals.types';

const initialState: GoalsResponse = {
  goals: []
};

export const goalsSlice = createSlice({
  initialState,
  name: 'goals',
  reducers: {
    updateGoals: (state, action) => {
      state.goals = action.payload;
    }
  }
});

export const { updateGoals } = goalsSlice.actions;

export default goalsSlice.reducer;
