import React from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Container,
    Stack,
} from "@mui/material";

const FooterForm = () => {
    return (
        <Box
            sx={{
                py: 6,
                background:
                    "linear-gradient(to top, transparent 20%, transparent 20%, #010912 20%, #2571c2 50%, transparent 50%, transparent 100%);",
            }}
        >
            <Container maxWidth="xl" id="footer-form">
                <Grid container spacing={4}>
                    {/* Form Section */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        order={{ xs: 2, md: 1 }}
                        alignSelf={"end"}
                    >
                        <Stack
                            className="form-section"
                            ml={"auto"}
                            sx={{
                                bgcolor: "#fff",
                                borderRadius: "8px",
                                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                                position: "relative",
                                zIndex: 1,
                            }}
                            p={6}
                        >
                            <Typography
                                variant="h6"
                                color="primary"
                                sx={{ marginBottom: "20px" }}
                            >
                                If you are a patient, please fill out the form
                            </Typography>
                            <form>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    required
                                    variant="standard"
                                    sx={{ marginBottom: "16px" }}
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    required
                                    variant="standard"
                                    sx={{ marginBottom: "16px" }}
                                />
                                <TextField
                                    fullWidth
                                    label="Mobile No"
                                    required
                                    variant="standard"
                                    sx={{ marginBottom: "16px" }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </form>
                        </Stack>
                    </Grid>

                    {/* Image and Description Section */}
                    <Grid item xs={12} order={{ xs: 1, md: 2 }} md={6}>
                        <Typography variant="h6" fontWeight={700} mb={2}>
                            What to Expect at Medicana
                        </Typography>
                        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                            <li style={{ marginBottom: "8px" }}>
                                <Typography variant="body1">
                                    <span style={{ color: "secondary.text" }}>
                                        •
                                    </span>{" "}
                                    High Satisfaction: Patients at Medicana
                                    report high satisfaction with their surgical
                                    outcomes and the personalized care they
                                    receive.
                                </Typography>
                            </li>
                            <li style={{ marginBottom: "8px" }}>
                                <Typography variant="body1">
                                    <span style={{ color: "secondary.text" }}>
                                        •
                                    </span>{" "}
                                    Professionalism and Comfort: Our
                                    professional team ensures a smooth
                                    experience from consultation through
                                    recovery, with luxurious accommodations and
                                    comprehensive care.
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FooterForm;
