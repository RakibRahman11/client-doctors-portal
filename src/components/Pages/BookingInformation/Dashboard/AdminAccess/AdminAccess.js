import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const AdminAccess = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] =  useState(false)
    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                if(data.modifiedCount){
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <TextField onBlur={handleOnBlur} style={{ width: '33%', marginRight: '20px', marginBottom: '10px' }} type='email' label={email} variant="standard"/>
                <Button type='submit' variant="contained">make admin</Button>
                {success && <Alert severity="success">Admin added</Alert>}
            </form>
        </div>
    );
};

export default AdminAccess;