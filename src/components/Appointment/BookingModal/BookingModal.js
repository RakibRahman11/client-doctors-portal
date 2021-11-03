import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';

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


const BookingModal = ({ open, handleClose, booking, date }) => {
    const { title, time } = booking
    const bookInfo = e =>{
        alert('Successfully booked')
        handleClose()
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
                    <TextField style={{width:'33%', marginRight:'20px', marginBottom:'10px'}} id="standard-basic" label={time} variant="standard" disabled/>
                    <TextField style={{width:'33%', marginBottom:'10px'}} id="standard-basic" label={date.toDateString()} variant="standard" disabled/>
                    <TextField style={{width:'80%', marginBottom:'10px'}} id="standard-basic" label="Your Name" variant="standard"/>
                    <TextField style={{width:'80%', marginBottom:'10px'}} id="standard-basic" label="Your Email" variant="standard"/>
                    <TextField style={{width:'80%', marginBottom:'35px'}} id="standard-basic" label="Contact Number" variant="standard"/>
                    <Button onClick={bookInfo} variant="contained">Book the appointment</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;