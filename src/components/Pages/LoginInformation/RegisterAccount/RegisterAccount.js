import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginImg from '../../../../../src/images/login.png'
import useAuth from '../../../../hooks/useAuth';

const RegisterAccount = () => {
    const { createUser, isLoading, authError, user } = useAuth()
    const [loginData, setLoginData] = useState({})
    const loginInfo = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updateLoginData = { ...loginData }
        updateLoginData[field] = value
        setLoginData(updateLoginData)
        console.log(loginData);
    }
    const handleLogin = e => {
        if (loginData.password !== loginData.retypePassword) {
            return alert('Password did not match')
        }
        alert('Update Information')
        createUser(loginData.email, loginData.password)
        e.preventDefault()
    }
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ marginY: 'auto' }}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    { !isLoading && 
                    <form onSubmit={handleLogin}>
                        <TextField
                            id="standard-basic"
                            sx={{ width: '75%', mt: 2 }}
                            type='name'
                            name='name'
                            onChange={loginInfo}
                            label="Your name"
                            variant="standard" />
                        <TextField
                            id="standard-basic"
                            sx={{ width: '75%', mt: 2 }}
                            name='email'
                            type='email'
                            onChange={loginInfo}
                            label="Your email"
                            variant="standard" />
                        <TextField
                            id="standard-password-input"
                            sx={{ width: '75%', mt: 2 }}
                            name='password'
                            onChange={loginInfo}
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        /><br />
                        <TextField
                            id="standard-password-input"
                            sx={{ width: '75%', mt: 2 }}
                            name='retypePassword'
                            onChange={loginInfo}
                            label="Retype the password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        /><br />
                        <Button variant="contained" type="submit" sx={{ mt: 3 }}>Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to='/login'><Typography style={{ marginTop: '10px' }} variant="button" display="block" gutterBottom>
                            Already an account? Please login
                        </Typography></NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Successfully created</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%' }} src={loginImg} alt='' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default RegisterAccount;