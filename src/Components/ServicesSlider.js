import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Container,
    Stack,
} from "@mui/material";

const services = [
    {
        title: "1. Airport Transfers",
        description:
            "Complimentary airport pick-up and drop-off service to ensure a hassle-free experience from the moment you arrive in Istanbul.",
        image: "/LP_additional_services/vito.png",
    },
    {
        title: "2. Accommodation Arrangements",
        description:
            "We assist in booking comfortable, luxury accommodations for you and any companions during your stay. Some of our packages include accommodation in top-tier hotels or within our facility.",
        image: "/LP_additional_services/accommodation_arrangements.png",
    },
    {
        title: "3. Interpreter and Translation Services",
        description:
            "To ensure clear communication, we offer professional interpreters fluent in multiple languages, including English,Arabic, Russian, and more. ",
        image: "/LP_additional_services/interpreter_and_services.png",
    },
    {
        title: "4. Personal Patient Coordinator",
        description:
            "Every patient receives a dedicated coordinator who will guide them through the entire process, from consultation to recovery. Your coordinator will be available to answer any questions and assist with any logistics.",
        image: "/LP_additional_services/personal_patient_coordinator.png",
    },
    {
        title: "5. Post-Operative Care & Follow-Up",
        description:
            "We provide comprehensive aftercare instructions and follow-up consultations to monitor your recovery and ensure you achieve the best results.",
        image: "/LP_additional_services/Post_operative_care.png",
    },
    {
        title: "6. 24/7 Medical Assistance",
        description:
            "Our team is available around the clock for any medical concerns during your recovery.",
        image: "/LP_additional_services/24_7.png",
    },
];

const ServicesSlider = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(115deg, #093b6f 0%, #010912 100%)",
                py: 6,
            }}
            id="services"
        >
            <Container maxWidth="xl">
                <Typography variant="h4" color="white" fontWeight={700}>
                    Additional Services Offered to Ensure a Comfortable
                    Experience
                </Typography>
                <Typography variant="h6" color="white" fontWeight={500} mb={4}>
                    At Medicana Health Group, we understand that traveling for
                    surgery can be a major decision. To ensure a smooth and
                    stress-free journey, we offer a range of services beyond the
                    surgical treatments:
                </Typography>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3.5}
                    loop={false}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                    }}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    height: "100%",
                                    boxShadow:
                                        "0px 4px 15px rgba(0, 0, 0, 0.2)",
                                    borderRadius: 1,
                                    overflow: "hidden",
                                    background: "transparent",
                                    border: "2px solid rgba(60, 69, 79, 0.7058823529)",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={service.image}
                                    alt={service.title}
                                    sx={{
                                        width: "100%",
                                        height: "180px",
                                        objectFit: "cover",
                                    }}
                                />
                                <Box
                                    sx={{
                                        background:
                                            "radial-gradient(circle, rgba(60, 69, 79, 0.7058823529) 0%, rgba(26, 36, 50, 0.8784313725) 100%)",
                                        color: "white",
                                        backdropFilter: "blur(50px)",
                                        WebkitBackdropFilter: "blur(50px)",
                                        padding: 3,
                                        borderRadius: 1,
                                        height: 270,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        sx={{
                                            fontSize: {
                                                xs: "1rem", 
                                                sm: "1.25rem", 
                                            },
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Stack direction="row" mt={1} gap={1}>
                                        <Stack
                                            sx={{
                                                width: "5px",
                                                height: "5px",
                                                bgcolor: "secondary.main",
                                                borderRadius: "50%",
                                                mt: 1,
                                                p: 0.5,
                                            }}
                                        />
                                        <Typography
                                            fontSize={{
                                                xs: "0.875rem", 
                                                sm: "1rem", 
                                            }}
                                            fontWeight={500}
                                            letterSpacing={1.1}
                                            sx={{
                                                opacity: 0.6,
                                            }}
                                        >
                                            {service.description}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
};

export default ServicesSlider;
