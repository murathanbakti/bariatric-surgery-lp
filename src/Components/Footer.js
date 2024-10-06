import React from "react";
import { Box, Grid, Typography, Button, Container, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#f6fcff",
                py: 6,
                borderTop: "1px solid #e0e0e0",
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img
                            src="/logo-desktop.png"
                            alt="Medicana Health Group"
                            style={{ width: "60%" }}
                        />
                        <Stack direction={"row"}>
                            <Button
                                href="tel:+447883302306"
                                variant="contained"
                                color="secondary"
                                startIcon={<PhoneIcon />}
                                sx={{
                                    borderRadius: 2,
                                    fontWeight: "bold",
                                    fontSize: 18,
                                    color: "white",
                                }}
                            >
                                <Typography
                                    color="white"
                                    fontSize={16}
                                    fontWeight={700}
                                    mr={2}
                                >
                                    Call Us
                                </Typography>
                                +44 7883 302306
                            </Button>
                        </Stack>

                        <Stack
                            direction="column"
                            spacing={2}
                            mt={3}
                            sx={{ color: "text.primary" }}
                        >
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            >
                                <EmailIcon color="primary" />
                                <Typography variant="body1">
                                    ipc@medicanainternational.com
                                </Typography>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                            >
                                <LocationOnIcon color="primary" />
                                <Typography variant="body1">
                                    Küçükbakkalköy, Allianz Tower, Kayışdağı Cd.
                                    No:1
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Right Section - Google Map and Payment Options */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h5"
                            color="primary.main"
                            fontWeight={700}
                        >
                            Get Directions
                        </Typography>
                        <Box
                            component="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2652.722727301881!2d29.100956185765135!3d40.98179639514288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac754b18c92df%3A0xdbaa1c9415e9941b!2sPlaza%20Cubes%20%7C%20Allianz%20Tower%20Ata%C5%9Fehir%20%7C%20Haz%C4%B1r%20%26%20Sanal%20%26%20Kiral%C4%B1k%20Ofis!5e0!3m2!1str!2str!4v1728126062713!5m2!1str!2str"
                            width="100%"
                            height="200px"
                            style={{ border: 0 }}
                            allowFullScreen="false"
                            loading="lazy"
                        ></Box>
                    </Grid>
                </Grid>
                <Grid xs={12}>
                    <Typography
                        variant="h5"
                        color="primary.main"
                        fontWeight={700}
                        mt={4}
                    >
                        Payment Options
                    </Typography>
                    <Stack
                        mt={2}
                        direction={"row"}
                        justifyContent={"space-around"}
                    >
                        <img src="/visa.png" alt="Visa" height={100} />
                        <img
                            src="/mastercard.png"
                            alt="MasterCard"
                            height={80}
                        />
                        <img src="/iyzico.png" alt="iyzico" height={45} />
                    </Stack>
                </Grid>

                {/* Footer Copyright */}
                <Box mt={6} textAlign="center" sx={{ color: "text.secondary" }}>
                    <Typography variant="body2">
                        Copyright © {new Date().getFullYear()} Medicana Health
                        Group
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
