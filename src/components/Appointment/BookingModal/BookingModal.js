import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BookingModal = ({ open, handleClose, booking, date, setBookingSuccess }) => {
    const { user } = useAuth()
    const { title, time } = booking
    const initialInfo = {patientName:user.displayName, email:user.email, phone:''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo)
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newPatientInfo = { ...bookingInfo }
        newPatientInfo[field] = value
        setBookingInfo(newPatientInfo)
        console.log(newPatientInfo);
    }
    const handleBookingInfo = e => {
        const appointment = {
            ...bookingInfo,
            serviceName:title,
            time,
            date:date.toLocaleDateString()
        }
        fetch('http://localhost:5000/appointments',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(appointment)    
        })
            .then(response => response.json())
            .then(data => {
                if(data.insertedId){
                    setBookingSuccess(true)
                    handleClose()
                }
            })
        e.preventDefault()
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <form>
                    <TextField style={{ width: '33%', marginRight: '20px', marginBottom: '10px' }} id="standard-basic" label={time} variant="standard" disabled />

                    <TextField style={{ width: '33%', marginBottom: '10px' }} id="standard-basic" label={date.toDateString()} variant="standard" disabled />

                    <TextField onBlur={handleOnChange} style={{ width: '80%', marginBottom: '10px' }} id="standard-basic" defaultValue={user?.displayName} name='name' label="Your Name" variant="standard" />

                    <TextField onBlur={handleOnChange} style={{ width: '80%', marginBottom: '10px' }} id="standard-basic" defaultValue={user?.email} label="Your Email" name='email' variant="standard" />

                    <TextField onBlur={handleOnChange} style={{ width: '80%', marginBottom: '35px'}} id="standard-basic" label="Contact Number" name='phone' variant="standard" />

                    <Button onClick={handleBookingInfo} variant="contained">Book the appointment</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;