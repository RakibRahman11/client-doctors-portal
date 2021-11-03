import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const Information = () => {
    return (
        <Box sx={{ 
            flexGrow: 1, 
            marginTop:'100px',
            }}>
            <Grid container spacing={5} sx={{marginX:'10%'}}>
                <Grid item sx={{padding:'5px',textAlign: 'left', bgcolor:'#0ECBF3', color:'white', marginRight:'10px'}} xs={6} md={3}>
                        <Typography variant="button" display="block" gutterBottom>
                            Opening Hours
                        </Typography>
                        <br />
                        <Typography variant="overline" display="block" gutterBottom>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, sapiente.
                        </Typography>
                </Grid>
                <Grid item sx={{padding:'5px', textAlign: 'left', bgcolor:'#2B415F', color:'white', marginRight:'10px'}} xs={6} md={3}>
                        <Typography variant="button" display="block" gutterBottom>
                            Opening Hours
                        </Typography>
                        <br />
                        <Typography variant="overline" display="block" gutterBottom>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, sapiente.
                        </Typography>
                </Grid>
                <Grid item sx={{padding:'5px', textAlign: 'left', bgcolor:'#0ECBF3', color:'white', marginRight:'10px'}} xs={6} md={3}>
                        <Typography variant="button" display="block" gutterBottom>
                            Opening Hours
                        </Typography>
                        <br />
                        <Typography variant="overline" display="block" gutterBottom>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, sapiente.
                        </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Information;