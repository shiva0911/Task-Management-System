
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setAuthHeader, api } from "../Api/Api";

export const submitTask = createAsyncThunk("submissions/submitTask", async ({ taskId, githubLink }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
        const { data } = await api.post(`/api/submit?task=${taskId}&githubLink=${githubLink}`, {});
        console.log("submitted task", data);
        return data;
    } catch (error) {
        console.log("catch", error);
        throw Error(error.response.data.error);
    }
});

export const fetchAllSubmission = createAsyncThunk("submissions/fetchAllSubmission", async () => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
        const { data } = await api.get(`/api/submit`);
        console.log("get all submission tasks", data);
        return data;
    } catch (error) {
        console.log("catch", error);
        throw Error(error.response.data.error);
    }
});

export const fetchSubmissionByTaskId = createAsyncThunk("submissions/fetchSubmissionByTaskId", async (taskId) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
        const { data } = await api.get(`/api/submit/task/${taskId}`, {});
        console.log("get task by id", data);
        return data;
    } catch (error) {
        console.log("catch", error);
        throw Error(error.response.data.error);
    }
});

export const acceptDeclineSubmission = createAsyncThunk("submissions/acceptDeclineSubmission", async ({ id, status }) => {
    setAuthHeader(localStorage.getItem("jwt"), api);
    try {
        const { data } = await api.put(`/api/submit/${id}?status=${status}`, {});
        console.log("accept task", data);
        return data;
    } catch (error) {
        console.log("catch", error);
        throw Error(error.response.data.error);
    }
});

const submissionSlice = createSlice({
    name: 'submission',
    initialState: {
        submissions: [],
        status: '',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(submitTask.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitTask.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.submissions.push(action.payload);
            })
            .addCase(submitTask.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchAllSubmission.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.submissions = action.payload;
            })
            .addCase(fetchAllSubmission.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchSubmissionByTaskId.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.submissions = action.payload;
            })
            .addCase(acceptDeclineSubmission.fulfilled, (state, action) => {
                state.status = 'failed';
                state.submissions = state.submissions.map((item) => item.id !== action.payload.id ? item : action.payload);
            });
    }
});

export default submissionSlice.reducer;
