import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, push, ref, remove, set, update } from "firebase/database";
import { db } from "../../firebase";

export const addMovie = createAsyncThunk('/addMovie', async (data) => {
    try {
        await set(push(ref(db, "/movies")), data);
        // Swal.fire("Movie successfully addedd...!");
        return data
    } catch (err) {
        console.log(err);
    }
})

export const showMovie = createAsyncThunk('/showMovie', async () => {
    let arr = []
    try {
        const data = await get(ref(db, "/movies"));
        const newData = data.val();

        for (var key in newData) {
            arr.push({ id: key, ...newData[key] });
        }

    } catch (err) {
        console.log(err);
    }

    return arr
})

export const editMovie = createAsyncThunk('/editMovie', async ({ id, data }) => {
    try {
        await update(ref(db, `/movies/${id}`), data)
    } catch (err) {
        console.log(err)
    }

    return { id, ...data }
})

export const deleteMovie = createAsyncThunk('/deleteMovie', async (id) => {
    try {
        await remove(ref(db, `/movies/${id}`))
    } catch (err) {
        console.log(err)
    }

    return id
})

const movieReducer = createSlice({
    name: 'movies',
    initialState: {
        moviesData: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(addMovie.fulfilled, (state, action) => {
                state.moviesData.push(action.payload)
            })
            .addCase(showMovie.fulfilled, (state, action) => {
                state.moviesData = action.payload
            })
            .addCase(editMovie.fulfilled, (state, action) => {
                const { id } = action.payload
                const index = state.moviesData.findIndex(ele => ele.id === id)
                if (index !== -1) {
                    state.moviesData[index] = action.payload;
                }
            })
            .addCase(deleteMovie.fulfilled, (state, action) => {
                state.moviesData = state.moviesData.filter(
                    ele => ele.id !== action.payload
                )
            })

    }
})

export default movieReducer.reducer