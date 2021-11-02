import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import cavity from '../../../../src/images/cavity.png'
import fluoride from '../../../../src/images/fluoride.png'
import whitening from '../../../../src/images/whitening.png'
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

const services = [
    {
        title: 'Cavity treatment',
        description: 'Better treatment in doctors portal',
        image: cavity
    },
    {
        title: 'Fluoride treatment',
        description: 'Better treatment in doctors portal',
        image: fluoride
    },
    {
        title: 'Whitening treatment',
        description: 'Better treatment in doctors portal',
        image: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ color: 'info.main', mt: 8 }}>
                Our services
            </Typography>
            <Typography variant="h4" sx={{ mb: 3 }} color="text.secondary">
                Services we provide
            </Typography>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.title} service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;