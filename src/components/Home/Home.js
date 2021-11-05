import React from 'react';
import Aboutus from '../Aboutus/Aboutus';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menubar from '../Menubar/Menubar';
import Packages from '../Packages/Packages';
import ProfessionalTeam from '../ProfessionalTeam/ProfessionalTeam';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Header></Header>
            <Packages></Packages>
            <ProfessionalTeam></ProfessionalTeam>
            <Aboutus></Aboutus>
            <Footer></Footer>
        </div>
    );
};

export default Home;