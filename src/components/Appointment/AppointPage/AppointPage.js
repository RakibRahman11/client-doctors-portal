import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointAvail from '../AppointAvail/AppointAvail';
import AppointHeader from '../AppointHeader/AppointHeader';


const AppointPage = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointHeader date={date} setDate={setDate}></AppointHeader>
            <AppointAvail date={date}></AppointAvail>
        </div>
    );
};

export default AppointPage;