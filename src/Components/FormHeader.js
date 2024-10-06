import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Stack,
    Container,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";

export const FormHeader = () => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
    return (
        <Box>
            <Stack height={"100%"} pt={4} mb={4}>
                <Container maxWidth="xl">
                    <Grid
                        container
                        alignItems={"center"}
                        justifyContent={"space-between"}
                    >
                        {/* Image Section */}
                        <Grid item xs={12} md={3} lg={7}>
                            <Box display="flex" justifyContent="center">
                                <img
                                    src="/doctor.png"
                                    alt="Doctor"
                                    style={{
                                        width:
                                            isMdUp && !isLgUp ? "auto" : "100%", // Between md and lg, height is 100%, otherwise width is 100%
                                        height:
                                            isMdUp && !isLgUp ? "100%" : "auto", // Between md and lg, height is 100%, otherwise auto
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} lg={5}>
                            <Stack
                                className="left-section"
                                gap={2}
                                sx={{ padding: 2 }}
                            >
                                <Typography
                                    variant="h3"
                                    color="primary.main"
                                    fontWeight={700}
                                >
                                    Experience Leading Bariatric Surgery in
                                    Istanbul with Medicana Health Group
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    fontWeight={600}
                                    fontSize={15}
                                    zIndex={1}
                                    color="textPrimary"
                                    textAlign={"justify"}
                                >
                                    The obesity surgery method is suitable for
                                    people who have applied all other treatment
                                    methods before the surgical procedure but
                                    have not been successful. The patient should
                                    be evaluated with all relevant units before
                                    undergoing a surgical procedure and should
                                    be suitable for surgery in terms of
                                    anesthesia. Patient selection is made
                                    according to body mass index. If the body
                                    mass index is over 40, the patient can be
                                    operated. Between 35 and 40, in people with
                                    an additional disease (such as hypertension,
                                    Type 2 diabetes, sleep apnea syndrome, high
                                    triglyceride heart disease, hypoventilation
                                    syndrome, fatty liver), If the body mass
                                    index is between 30-35, surgery may be
                                    recommended for Type 2 Diabetes patients
                                    whose blood sugar cannot be controlled by
                                    medical treatments.
                                </Typography>
                            </Stack>
                            <Stack
                                className="form-section"
                                ml={"auto"}
                                sx={{
                                    backgroundColor: "#FFF",
                                    borderRadius: "4px",
                                    position: "relative",
                                    zIndex: 1,
                                    border: 10,
                                    borderColor: "primary.main",
                                }}
                                p={4}
                            >
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    sx={{ marginBottom: "20px" }}
                                >
                                    If you are a patient, please fill out the
                                    form
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
                    </Grid>
                </Container>
                <Box mt={-3} height={30} bgcolor={"primary.main"} />
            </Stack>
        </Box>
    );
};
