import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../../src/images/bg.png'
import chair from '../../../../src/images/chair.png'
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: '220px',

}
const align = {
    display: 'flex',
    alignItems: 'center',
    height: 300
}

const Banner = () => {
    return (
        <Container>
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={align}>

                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: 'left'
                    }}>
                        <Box>
                            <Typography variant="h2" sx={{ color: 'black', textAlign: 'left' }}>
                                Your new smile starts here
                            </Typography>
                            <Typography variant="h6" sx={{ color: 'gray', textAlign: 'left' }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, quidem.
                            </Typography><br />
                            <Button variant="contained" style={{ backgroundColor: '#0ECBF3', marginTop: '30px' }}>Learn more</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={chair} style={{ width: '400px' }} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;