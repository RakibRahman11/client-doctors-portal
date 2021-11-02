import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../../src/images/appointment-bg.png'
import doctor from '../../../../src/images/doctor.png'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor:'#2B415F',
    backgroundBlendMode: 'darken, luminosity',
    marginTop:'200px',
}

const AppointmentBg = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={doctor} style={{width:'400px',marginTop:'-100px'}} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display:'flex',
                    justifyContent:'flex-start',
                    textAlign:'left'
                }}>
                        <Box>
                        <Typography variant="h6" sx={{ my: 3, color:'#0ECBF3', textAlign: 'left' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{ mb: 3, color:'white', textAlign: 'left' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 3, color:'white', textAlign: 'left', fontWeight:300, fontSize:14 }}>
                           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, quidem.
                        </Typography><br/>
                        <Button variant="contained" style={{backgroundColor:'#0ECBF3', marginTop:'30px'}}>Learn more</Button>
                        </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBg;