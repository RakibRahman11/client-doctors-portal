import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import care from '../../../../src/images/treatment.png'
import { Button } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const DentalCare = () => {
    return (
        <Paper  sx={{ margin: 'auto', width:'50%', flexGrow: 1, boxShadow: 0}}>
            <Grid container spacing={4}>
                <Grid item>
                    <ButtonBase sx={{ width: 280, height: 550 }}>
                        <Img src={care} alt="" />
                    </ButtonBase>
                </Grid>
                <Grid item sx={{marginY:'auto', textAlign: 'left'}} xs={12} md={6} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="h4" gutterBottom component="div">
                                Exceptional Dental Care, On Your Terms
                            </Typography>
                            <Typography variant="body1" color="text.secondary" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.
                            </Typography>
                        </Grid>
                        <Grid item>
                        <Button variant="contained" style={{ backgroundColor: '#0ECBF3', marginTop: '01px' }}>Learn more</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    );
};

export default DentalCare;