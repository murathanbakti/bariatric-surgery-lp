import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Container,
    Stack,
} from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import SpaIcon from "@mui/icons-material/Spa";

const WhyMedicana = () => {
    const data = useMemo(
        () => [
            {
                title: "Experienced Surgical Team",
                description:
                    "Our surgeons are leaders in the field, skilled in the latest bariatric surgery techniques.",
                icon: (
                    <MedicalServicesIcon fontSize="large" color="secondary" />
                ),
            },
            {
                title: "Comprehensive Support",
                description:
                    "From initial consultation through recovery, we offer continuous support and guidance.",
                icon: <SupportAgentIcon fontSize="large" color="secondary" />,
            },
            {
                title: "Cultural Experience",
                description:
                    "Enjoy the beautiful, vibrant city of Istanbul while you recover in comfort.",
                icon: <TravelExploreIcon fontSize="large" color="secondary" />,
            },
            {
                title: "Internationally Accredited Excellence",
                description:
                    "We uphold global standards in safety, quality, and patient care, recognized by our international accreditations.",
                icon: <VerifiedIcon fontSize="large" color="secondary" />,
            },
            {
                title: "Personalized Care Tailored to You",
                description:
                    "Every patient's journey is unique. Our dedicated team ensures a personalized experience by tailoring each treatment to meet your specific needs.",
                icon: <FavoriteIcon fontSize="large" color="secondary" />,
            },
            {
                title: "Seamless End-to-End Experience",
                description:
                    "From pre-treatment planning to post-surgery recovery, we assist with travel, accommodation, and language support.",
                icon: <AutorenewIcon fontSize="large" color="secondary" />,
            },
            {
                title: "Cutting-Edge Techniques and Technology",
                description:
                    "Our surgeons utilize the latest techniques and state-of-the-art technology, minimizing recovery time and enhancing outcomes.",
                icon: (
                    <PrecisionManufacturingIcon
                        fontSize="large"
                        color="secondary"
                    />
                ),
            },
            {
                title: "A Harmonious Blend of Culture and Care",
                description:
                    "In the enchanting city of Istanbul, where exceptional medical care meets rich cultural experiences.",
                icon: <SpaIcon fontSize="large" color="secondary" />,
            },
        ],
        []
    );

    const cardStyles = {
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    };

    return (
        <Container maxWidth={"xl"} id="why-medicana">
            <Typography
                variant="h4"
                color="primary.main"
                fontWeight={700}
                mb={4}
            >
                Why Choose Medicana for Your Bariatric Surgery?
            </Typography>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                centeredSlides={true}
                loop={true}
                grabCursor={true}
                breakpoints={{
                    1024: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1.5,
                    },
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ padding: "10px", height: "100%" }}>
                            <Card sx={cardStyles}>
                                <Box sx={{ mt: 2 }}>{item.icon}</Box>
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        gutterBottom
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1" mb={3}>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        paddingBottom: "16px",
                                        mt: "auto",
                                    }}
                                >
                                    <Button variant="contained" color="primary">
                                        Learn More
                                    </Button>
                                </Box>
                            </Card>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default WhyMedicana;
