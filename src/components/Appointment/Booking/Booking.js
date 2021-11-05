import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    const { title, time, slots } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ p: 5 }}>
                    <Typography variant="h5" gutterBottom component="div" style={{ fontWeight: 700 }} sx={{ color: 'info.main' }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {slots} SEATS AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} variant="contained" sx={{ mt: 3 }}>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                open={open}
                handleClose={handleClose}
                booking={booking}
                setBookingSuccess={setBookingSuccess}
            >
            </BookingModal>
        </>
    );
};

export default Booking;