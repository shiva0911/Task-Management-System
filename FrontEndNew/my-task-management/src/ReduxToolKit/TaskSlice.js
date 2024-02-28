import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setAuthHeader, api } from "../Api/Api";

// Create async thunks for various tasks
export const fetchTask = createAsyncThunk("task/fetchTasks",
    async ({ status }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.get("/api/tasks", {
                params: { status }
            });
            console.log("fetch admin tasks:", data);
            return data;
        } catch (error) {
            console.log("error", error);
            throw Error(error.response.data.error);
        }
    });

export const fetchUserTasks = createAsyncThunk("task/fetchUserTasks",
    async ({ status }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.get("/api/tasks/user", {
                params: { status }
            });
            console.log("fetch user tasks:", data);
            return data;
        } catch (error) {
            console.log("error", error);
            throw Error(error.response.data.error);
        }
    });

export const fetchTaskById = createAsyncThunk("task/fetchTaskById",
    async ({ taskId }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.get(`api/tasks/${taskId}`);
            console.log("fetch tasks by id:", data);
            return data;
        } catch (error) {
            console.log("error", error);
            throw Error(error.response.data.error);
        }
    });

export const createTask = createAsyncThunk("task/createTask",
    async ({ taskData }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.post(`api/tasks/`, taskData);
            console.log("create task:", data);
            return data;
        } catch (error) {
            console.log("error", error);
            throw Error(error.response.data.error);
        }
    });

export const updateTask = createAsyncThunk("task/updateTask",
    async ({ id, updatedTaskData }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.put(`api/tasks/${id}`, updatedTaskData);
            console.log("updated task:", data);
            return data;
        } catch (error) {
            console.log("error", error);
            throw Error(error.response.data.error);
        }
    });

export const assignTaskToUser = createAsyncThunk("task/assignTaskToUser",
    async ({ taskId, userId }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            const { data } = await api.put(`api/tasks/${taskId}/user/${userId}/assigned`);
            console.log("Assigned Task to user:", data);
            return data;
        } catch (error) {
            console.log("error", error);
            throw Error(error.response.data.error);
        }
    });

export const deleteTask = createAsyncThunk("task/deleteTask",
    async ({ taskId }) => {
        setAuthHeader(localStorage.getItem("jwt"), api);
        try {
            await api.delete(`api/tasks/${taskId}`);
            console.log("Deleted Task successfully");
            return taskId;
        } catch (error) {
            console.log("error", error);
            throw Error(error.response.data.error);
        }
    });

// Define the task slice
const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        loading: false,
        error: null,
        taskDetails: null,
        usersTask: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTask.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(fetchUserTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.usersTask = action.payload;
            })
            .addCase(fetchTaskById.fulfilled, (state, action) => {
                state.loading = false;
                state.taskDetails = action.payload;
            })
            .addCase(fetchUserTasks.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(createTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks.push(action.payload);
            })
            .addCase(createTask.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const updatedTask = action.payload;
                state.loading = false;
                state.tasks = state.tasks.map((task) =>
                    task.id === updatedTask.id ? { ...task, ...updatedTask } : task
                );
            })
            .addCase(assignTaskToUser.fulfilled, (state, action) => {
                const updatedTask = action.payload;
                state.loading = false;
                state.tasks = state.tasks.map((task) =>
                    task.id === updatedTask.id ? { ...task, ...updatedTask } : task
                );
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            });
    }
});

// Export the reducer
export default taskSlice.reducer;
