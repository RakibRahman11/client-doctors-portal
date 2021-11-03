import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBg from '../AppointmentBg/AppointmentBg';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import DentalCare from '../DentalCare/DentalCare';
import Information from '../Information/Information';
import PatientReview from '../PatientReview/PatientReview';
import Services from '../Services/Services';

const Home = () => {
    
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Information></Information>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBg></AppointmentBg>
            <PatientReview></PatientReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;