import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../../src/images/chair.png'
import { Container } from '@mui/material';
import DatePick from '../../Shared/DatePick/DatePick';

const AppointHeader = ({date, setDate}) => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, marginTop:'50px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <DatePick date={date} setDate={setDate}></DatePick>
                </Grid>
                <Grid item xs={12} md={4}>
                    <img style={{ width: '100%' }} src={chair} alt='' />
                </Grid>
            </Grid>
        </Box>
        </Container>
    );
};

export default AppointHeader;