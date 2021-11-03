import React from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import person1 from '../../../../src/images/people-1.png'
import person2 from '../../../../src/images/people-2.png'
import person3 from '../../../../src/images/people-3.png'


const PatientReview = () => {
    return (
        <div style={{ marginTop: '70px' }}>
            <Typography sx={{ textAlign: 'left', marginLeft: '20%', color: 'info.main', fontWeight: 700 }} variant="button" display="block" gutterBottom>
                TESTIMONIAL
            </Typography>
            <Typography sx={{ textAlign: 'left', marginLeft: '20%' }} variant="h4" gutterBottom component="div">
                What's Our Patient Says
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    columnGap: 3,
                    rowGap: 1,
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    marginX: '20%',
                    marginY: '60px'
                }}
            >
                <Paper>
                    <Card sx={{ minWidth: 275 }}>

                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum nam mollitia beatae eligendi perferendis praesentium quas ex modi molestiae.
                            </Typography>
                        </CardContent>
                        <img src={person1} alt='' />
                        <Typography variant="button" display="block" >
                            Winson Hery
                        </Typography>
                        <Typography variant="overline" display="block" >
                            California
                        </Typography>
                    </Card>
                </Paper>
                <Paper>
                    <Card sx={{ minWidth: 275 }}>

                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum nam mollitia beatae eligendi perferendis praesentium quas ex modi molestiae.
                            </Typography>
                        </CardContent>
                        <img src={person2} alt='' />
                        <Typography variant="button" display="block" >
                            Winson Hery
                        </Typography>
                        <Typography variant="overline" display="block" >
                            California
                        </Typography>
                    </Card>
                </Paper>
                <Paper>
                    <Card sx={{ minWidth: 275 }}>

                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis cum nam mollitia beatae eligendi perferendis praesentium quas ex modi molestiae.
                            </Typography>
                        </CardContent>
                        <img src={person3} alt='' />
                        <Typography variant="button" display="block" >
                            Winson Hery
                        </Typography>
                        <Typography variant="overline" display="block" >
                            California
                        </Typography>
                    </Card>
                </Paper>

            </Box>
        </div>
    );
};

export default PatientReview;