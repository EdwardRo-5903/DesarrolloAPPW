import { createSlice } from '@reduxjs/toolkit';

const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    value: [], 
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload); 
    },
    removeGoal: (state, action) => {
      state.value = state.value.filter(goal => goal.id !== action.payload);
    },
    editGoal: (state, action) => {
      const index = state.value.findIndex(goal => goal.id === action.payload.id);
      if (index !== -1) {
        state.value[index] = { ...state.value[index], ...action.payload }; 
      }
    },
  },
});

export const { addGoal, removeGoal, editGoal } = goalsSlice.actions; 
export const selectGoals = (state) => state.goals.value; 
export default goalsSlice.reducer; 