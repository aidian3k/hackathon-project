import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BuildUserGoalsResponse, Goal } from '../../pages/dashboardPage/goalDetails/GoalDetails.types';

const initialState: BuildUserGoalsResponse = {
  goals: new Array<Goal>()
};

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    setGoals: (state, action: PayloadAction<Array<Goal>>) => {
      state.goals = action.payload;
    }
  }
});

export const { setGoals } = goalsSlice.actions;

export default goalsSlice.reducer;
