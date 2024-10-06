import React from "react";
import "./App.css";
import { FormHeader } from "./Components/FormHeader";
import { Box } from "@mui/material";
import { SurgeryList } from "./Components/SurgeryList";
import BMICalculator from "./Components/BMICalculator";
import DoctorSlider from "./Components/DoctorSlider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import ServicesSlider from "./Components/ServicesSlider";
import FooterForm from "./Components/FooterForm";
import Header from "./Components/Header";
import WhyMedicana from "./Components/WhyMedicana";
import Facilities from "./Components/Facilities";
import Footer from "./Components/Footer";
import Extencious from "./Components/Extencious";

const App = () => {
    return (
        <Box height={"100%"}>
            <Extencious />
            <Header />
            <FormHeader />
            <SurgeryList />
            <BMICalculator />
            <WhyMedicana />
            <DoctorSlider />
            <Facilities />
            <ServicesSlider />
            <FooterForm />
            <Footer />
        </Box>
    );
};

export default App;
