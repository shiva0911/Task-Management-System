import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../ReduxToolKit/AuthSlice';

export default function Signin({ togglePanel }) { 
    const dispatch=useDispatch()
    const [formData, setFormData] = useState({
        email: "", 
        password: "" 
    });

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(login(formData))
        console.log("login form", formData);
    };

    return (
        <div>
            <h1 className='text-lg font-bold text-center pb-8'>Login</h1>
            <form className="space-y-3" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChanges}
                    placeholder='enter your email...'
                />
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChanges}
                    placeholder='enter your Password...'
                />
                <div>
                    <Button className="customButton" type="submit" fullWidth sx={{ padding: ".9rem" }}> {/* Corrected className from customeButton to customButton */}
                        Login
                    </Button>
                </div>
            </form>
            <div className="mt-5 flex items-center gap-2 py-5 justify-center">
                <span>Dont have an account?</span>
                <Button onClick={togglePanel}>signup</Button>  {/* Corrected onClick function name from togglePannel to togglePanel */}
            </div>
        </div>
    );
}
