import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../../src/images/appointment-bg.png'

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: '#3A464B',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '200px',
    width:'65%',
    margin:'auto',
    padding:'30px'
}

const ContactUs = () => {
    return (
        <div style={appointmentBg}>
            <Typography sx={{ textAlign: 'center', color: 'info.main', fontWeight: 700 }} variant="button" display="block" gutterBottom>
                Contact Us
            </Typography>
            <Typography sx={{ marginBottom: '50px', color:'white' }} variant="h4" gutterBottom component="div">
                Always Connect With Us
            </Typography>
            <form>
                <TextField sx={{ width: '500px', marginBottom: '10px', bgcolor:'white' }} id="outlined-basic" placeholder="Email Address" variant="outlined" />
                <br />
                <TextField sx={{ width: '500px', marginBottom: '10px', bgcolor:'white' }} id="outlined-basic" placeholder="Subject" variant="outlined" />
                <br />
                <TextField
                    id="outlined-multiline-static"
                    placeholder="Your Message"
                    multiline
                    rows={4}
                    sx={{ width: '500px', bgcolor:'white', color:'white'}}
                />
                <br/>
                <Button variant="contained" style={{ backgroundColor: '#0ECBF3', marginTop: '10px' }}>SUBMIT</Button>
            </form>
        </div>
    );
};

export default ContactUs;