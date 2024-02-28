import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { register } from '../../ReduxToolKit/AuthSlice';

export default function Signup({ togglePanel }) {
    const dispatch=useDispatch();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        role: ""
    });

    const handleRoleChange = (e) => { 
        setFormData({ ...formData, role: e.target.value });
    };

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        dispatch(register(formData))
        e.preventDefault();
        console.log("login form", formData);
    };

    return (
        <div>
            <h1 className='text-lg font-bold text-center pb-8'>Register</h1>
            <form className="space-y-3" onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName" // Changed name from "name" to "fullName"
                    value={formData.fullName}
                    onChange={handleChanges}
                    placeholder='enter your fullname'
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChanges}
                    placeholder='enter your email'
                />
                <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChanges}
                    placeholder='enter your Password'
                />

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.role}
                        name="role" 
                        label="Role"
                        onChange={handleRoleChange}
                    >
                        <MenuItem value={"ROLE_USER"}>USER</MenuItem>
                        <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
                    </Select>
                </FormControl>

                <div>
                    <Button className="customButton" type="submit" fullWidth sx={{ padding: ".9rem" }}>
                        Register
                    </Button>
                </div>
            </form>
            <div className="mt-5 flex items-center gap-2 py-5 justify-center">
                <span>Already have an account?</span>
                <Button onClick={togglePanel}>signin</Button>
            </div>
        </div>
    );
}
