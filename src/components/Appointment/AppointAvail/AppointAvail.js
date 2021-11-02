import React from 'react';
import Booking from '../Booking/Booking';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bookings = [
    {
        id: 1,
        title: 'Teeth Orthodontics',
        time: '9:00 AM - 10:AM',
        slots: 10
    },
    {
        id: 2,
        title: 'Teeth Orthodontics',
        time: '9:00 AM - 10:AM',
        slots: 10
    },
    {
        id: 3,
        title: 'Teeth Orthodontics',
        time: '9:00 AM - 10:AM',
        slots: 10
    },
    {
        id: 4,
        title: 'Teeth Orthodontics',
        time: '9:00 AM - 10:AM',
        slots: 10
    },
    {
        id: 5,
        title: 'Teeth Orthodontics',
        time: '9:00 AM - 10:AM',
        slots: 10
    },
    {
        id: 6,
        title: 'Teeth Orthodontics',
        time: '9:00 AM - 10:AM',
        slots: 10
    },
]

const AppointAvail = ({ date }) => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom component="div" sx={{ color: 'info.main', mb: 5 }}>
                Reported Time: {date.toDateString()}
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        bookings?.map(booking => <Booking
                            date={date}
                            booking={booking}
                            key={booking?.id}
                        ></Booking>)
                    }
                </Grid>
            </Box>

        </Container>
    );
};

export default AppointAvail;