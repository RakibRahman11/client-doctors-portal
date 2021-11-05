import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import loginImg from '../../../../../src/images/login.png'
import useAuth from '../../../../hooks/useAuth';



const LoginAccount = () => {
    const { user, authError, loginUser, googleSignIn } = useAuth()
    const [loginData, setLoginData] = useState({})
    const location = useLocation()
    const history = useHistory()
    const loginInfo = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const updateLoginData = { ...loginData }
        updateLoginData[field] = value
        setLoginData(updateLoginData)
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)
        alert('Update Information')
        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }
    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ marginY: 'auto' }}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            id="standard-basic"
                            sx={{ width: '75%', mt: 2 }}
                            name='email'
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
                        <Button variant="contained" type="submit" sx={{ mt: 3 }}>Login</Button>
                        <NavLink style={{ textDecoration: 'none', marginTop: '40px' }} to='/register'><Typography style={{ marginTop: '10px' }} variant="button" display="block" gutterBottom>
                            New user? Please register an account
                        </Typography></NavLink>
                    </form>
                    <p>---------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained" sx={{ mt: 3 }}>Google Sign-in</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '80%' }} src={loginImg} alt='' />
                </Grid>
                {user?.email && <Alert severity="success">Successfully logged in</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Grid>
        </Container>
    );
};

export default LoginAccount;