import React, { useCallback, useMemo, useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Stack,
    useMediaQuery,
    useTheme,
    Grid,
} from "@mui/material";

const BMICalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

    const calculateBMI = useCallback(() => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
        }
    }, [weight, height]);

    const bmiCategory = useMemo(() => {
        if (!bmi) return "";
        if (bmi < 18.5) return "Underweight";
        if (bmi >= 18.5 && bmi < 24.9) return "Healthy";
        if (bmi >= 25 && bmi < 29.9) return "Overweight";
        if (bmi >= 30 && bmi < 39.9) return "Obese";
        return "Severely Obese";
    }, [bmi]);

    const getIconForRow = useCallback(
        (min, max) => {
            if (!bmi) return "❌";
            const parsedBMI = parseFloat(bmi);
            if (min && max) {
                return parsedBMI >= min && parsedBMI <= max ? "✅" : "❌";
            } else if (min && !max) {
                return parsedBMI >= min ? "✅" : "❌";
            }
            return "❌";
        },
        [bmi]
    );

    return (
        <Box
            sx={{
                background: "linear-gradient(115deg, #093b6f 0%, #010912 100%)",
                py: 4,
                mb: 4,
            }}
            id={"bmi-calculator"}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} height={"fit-content"}>
                        <Box
                            sx={{
                                borderRadius: "8px",
                                height: isTabletOrSmaller ? "300px" : "100%",
                            }}
                        >
                            <img
                                src="/surgery-images/Radyoloji_16.png"
                                alt="BMI Illustration"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                backgroundColor: "white",
                                borderRadius: "8px",
                                padding: "32px",
                                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.7)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "100%",
                            }}
                        >
                            <TableContainer component={Paper} sx={{ mb: 4 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell
                                                align="center"
                                                colSpan={3}
                                                sx={{
                                                    backgroundColor:
                                                        "primary.main",
                                                    color: "white",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                BMI Categories
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {[
                                            {
                                                range: "10-18.5",
                                                category: "Underweight",
                                                min: 10,
                                                max: 18.5,
                                            },
                                            {
                                                range: "18.5-24.9",
                                                category: "Healthy",
                                                min: 18.5,
                                                max: 24.9,
                                            },
                                            {
                                                range: "25-29.9",
                                                category: "Overweight",
                                                min: 25,
                                                max: 29.9,
                                            },
                                            {
                                                range: "30-39.9",
                                                category: "Obese",
                                                min: 30,
                                                max: 39.9,
                                            },
                                            {
                                                range: "40+",
                                                category: "Severely Obese",
                                                min: 40,
                                                max: null,
                                            },
                                        ].map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell align="center">
                                                    {row.range}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.category}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {getIconForRow(
                                                        row.min,
                                                        row.max
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Typography
                                variant="h4"
                                fontWeight={700}
                                mb={4}
                                color="primary"
                            >
                                BMI Calculator
                            </Typography>
                            <Stack direction={"row"} gap={2} mb={2}>
                                <TextField
                                    label="Weight (kg)"
                                    variant="outlined"
                                    fullWidth
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    sx={{
                                        backgroundColor: "white",
                                        borderRadius: "4px",
                                    }}
                                />

                                <TextField
                                    label="Height (cm)"
                                    variant="outlined"
                                    fullWidth
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    sx={{
                                        backgroundColor: "white",
                                        borderRadius: "4px",
                                    }}
                                />
                            </Stack>
                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={calculateBMI}
                                sx={{
                                    padding: "10px 0",
                                    borderRadius: "50px",
                                }}
                            >
                                Calculate
                            </Button>

                            {bmi && (
                                <Box mt={4}>
                                    <Typography
                                        variant="h5"
                                        textAlign={"center"}
                                        fontWeight={700}
                                    >
                                        BMI Result: {bmi} ({bmiCategory})
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BMICalculator;
