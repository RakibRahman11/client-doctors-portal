import * as React from 'react';
import { Grid } from '@mui/material';
import DatePick from '../../../../Shared/DatePick/DatePick';
import ConfirmList from '../../ConfirmList/ConfirmList';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <DatePick date={date} setDate={setDate}></DatePick>
            </Grid>
            <Grid item xs={12} md={7}>
                <ConfirmList date={date}></ConfirmList>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;