import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'mi-api-key';

export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const response = await fetch('http://localhost:3001/goals', {
    headers: { 'x-api-key': API_KEY }
  });
  return await response.json();
});

export const addGoalAsync = createAsyncThunk('goals/addGoalAsync', async (goal) => {
  const response = await fetch('http://localhost:3001/goals', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'x-api-key': API_KEY
    },
    body: JSON.stringify({
      title: goal.title, 
      description: goal.description,
      dueDate: goal.dueDate
    }),
  });
  return await response.json();
});

export const editGoalAsync = createAsyncThunk('goals/editGoalAsync', async (goal) => {
  const response = await fetch(`http://localhost:3001/goals/${goal._id}`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json',
      'x-api-key': API_KEY
    },
    body: JSON.stringify({
      title: goal.title,
      description: goal.description,
      dueDate: goal.dueDate
    }),
  });
  return await response.json();
});

export const removeGoalAsync = createAsyncThunk('goals/removeGoalAsync', async (id) => {
  await fetch(`http://localhost:3001/goals/${id}`, {
    method: 'DELETE',
    headers: { 'x-api-key': API_KEY }
  });
  return id;
});

const goalsSlice = createSlice({
  name: 'goals',
  initialState: {
    value: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addGoal: (state, action) => {
      state.value.push(action.payload);
    },
    removeGoal: (state, action) => {
      state.value = state.value.filter(goal => goal._id !== action.payload);
    },
    editGoal: (state, action) => {
      const index = state.value.findIndex(goal => goal._id === action.payload._id);
      if (index !== -1) {
        state.value[index] = { ...state.value[index], ...action.payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(addGoalAsync.fulfilled, (state, action) => {
        state.value.push(action.payload);
      })
      .addCase(editGoalAsync.fulfilled, (state, action) => {
        const index = state.value.findIndex(goal => goal._id === action.payload._id);
        if (index !== -1) {
          state.value[index] = action.payload;
        }
      })
      .addCase(removeGoalAsync.fulfilled, (state, action) => {
        state.value = state.value.filter(goal => goal._id !== action.payload);
      });
  },
});

export const { addGoal, removeGoal, editGoal } = goalsSlice.actions;
export const selectGoals = (state) => state.goals.value;
export default goalsSlice.reducer;