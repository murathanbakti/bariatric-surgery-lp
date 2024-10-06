import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const DoctorSwiper = () => {
    const doctors = useMemo(
        () => [
            {
                name: "Prof. Dr. Bora Koç",
                image: "/Doctors/ProfDrBoraKoc_045.png",
            },
            {
                name: "Doç. Dr. Ulaş Sözen",
                image: "/Doctors/DoçDrUlaşSözener.png",
            },
            { name: "Erkan Yardımcı", image: "/Doctors/ErkanYardımcı.png" },
            { name: "Sinan Boğa", image: "/Doctors/OKN_4964_1.png" },
            { name: "Babek Tabandeh", image: "/Doctors/babektabandeh.png" },
            { name: "Ersin Öztürk", image: "/Doctors/ErsinÖztürk.png" },
        ],
        []
    );

    const navButtonStyles = {
        position: "absolute",
        top: "50%",
        zIndex: 10,
    };

    return (
        <Box
            sx={{
                background: (theme) =>
                    `linear-gradient(to bottom, ${theme.palette.primary.main} 70%, ${theme.palette.secondary.main} 150%)`,
                position: "relative",
                mt: 4,
            }}
            id='doctors'
        >
            <Stack bgcolor={"white"} py={4}>
                <Container maxWidth={"xl"}>
                    <Typography
                        variant="h4"
                        color="primary.main"
                        fontWeight={700}
                    >
                        Our Doctors
                    </Typography>
                </Container>
            </Stack>

            <Container
                maxWidth={"lg"}
                sx={{ textAlign: "center", position: "relative", mt: -14 }}
            >
                <Swiper
                    modules={[Navigation, EffectCoverflow]}
                    spaceBetween={30}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={false}
                    navigation={{
                        nextEl: ".swiper-next",
                        prevEl: ".swiper-prev",
                    }}
                    grabCursor={true}
                    effect="coverflow"
                    initialSlide={2} 
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 300,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {doctors.map((doctor, index) => (
                        <SwiperSlide key={index}>
                            {({ isActive }) => (
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: "500px",
                                        transition:
                                            "transform 0.5s ease, opacity 0.5s ease",
                                        transform: isActive
                                            ? "scale(1)"
                                            : "scale(0.85)",
                                        opacity: isActive ? 1 : 0.5,
                                    }}
                                >
                                    <img
                                        src={doctor.image}
                                        alt={doctor.name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            filter: isActive
                                                ? "none"
                                                : "grayscale(100%)",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            position: "absolute",
                                            bottom: "30px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            color: "#fff",
                                            fontSize: "1.5rem",
                                            width: "100%",
                                            textShadow:
                                                "2px 2px 4px rgba(0, 0, 0, 1)",
                                            fontFamily: "cursive",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {doctor.name}
                                    </Typography>
                                </Box>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Button
                    className="swiper-prev"
                    variant="contained"
                    color="inherit"
                    sx={{ ...navButtonStyles, left: "40px" }}
                >
                    <ArrowBackIos fontSize="medium" />
                </Button>
                <Button
                    className="swiper-next"
                    color="inherit"
                    variant="contained"
                    sx={{ ...navButtonStyles, right: "40px" }}
                >
                    <ArrowForwardIos fontSize="medium" />
                </Button>
            </Container>
        </Box>
    );
};

export default DoctorSwiper;
